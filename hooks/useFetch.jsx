import { useRef, useEffect } from 'react';
import useAsync from './useAsync';

/**
 * React hook wrapper for the global fetch() -- https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * Arguments for `resource` and `options` in these methods match that of global fetch()
 * @returns Object with the following keys:
 *   data
 *   loading
 *   error
 *   run
 *   runAll
 *   abort
 */
export default function useFetch() {
    const asyncRunner = useAsync();

    const abortController = useRef(new AbortController());

    const abort = () => {
        abortController.current.abort();
        abortController.current = new AbortController();
    };

    //wrapper for global fetch(). 
    const fetchFunc = (resource, options) => fetch(resource, { ...options, signal: abortController.current.signal }).then(async (res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        try {
            const objData = await res.json();
            return objData;
        } catch (err) {
            const txtData = await res.text();
            return txtData;
        }
    });

    /**
     * 
     * @param {*} resource -- resource (URL) of the
     * @param {*} options 
     * @param {*} onSuccess 
     * @param {*} onError 
     * @param {*} abortCurrent 
     */
    const run = (resource, options = {}, onSuccess = null, onError = null, abortCurrent = true) => {
        if (abortCurrent)
            abort();
        asyncRunner.run(fetchFunc, [resource, options], onSuccess, onError);
    };

    /**
     * 
     * @param {Array} fetchArgs Array of size-2 Arrays for fetch arguments, [resource<String>, options<Object>]
     * @param {*} onSuccess 
     * @param {*} onError 
     * @param {*} abortCurrent 
     */
    const runAll = (fetchArgs, onSuccess = null, onError = null, abortCurrent = true) => {
        if (abortCurrent) abort();
        const callbacks = Promise.all(
            fetchArgs.map(([resource, options]) => fetchFunc(resource, options))
        );
        asyncRunner.run(callbacks, [], onSuccess, onError);
    }


    useEffect(() => {
        return () => abortController.current.abort();
    }, []);

    return {
        data: asyncRunner.data,
        loading: asyncRunner.loading,
        error: asyncRunner.error,
        run, runAll, abort,
        doFetch: run, doFetchAll: runAll, //todo: replace all refs with run, then remove
    };
}