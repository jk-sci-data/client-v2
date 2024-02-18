import { useState, useEffect, useRef, useCallback } from 'react';

export default function useFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const abortController = useRef(new AbortController());

    const doFetch = useCallback(async (url, options={}, onSuccess=null, onError=null) => {
        setLoading(true);
        setError(null);
        setData(null);
        try {
            const res = await fetch(url, {
                ...options,
                signal: abortController.current.signal,
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            if (onSuccess)
                onSuccess(res);
            const resData = await res.json();
            setData(resData);
        } catch (e) {
            if (onError)
                onError(e);
            if (!abortController.current.signal.aborted) {
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }, []);

    
    useEffect(() => {
        return () => abortController.current.abort();
    }, []);

    return { data, loading, error, doFetch };
}
