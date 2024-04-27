import { useEffect, useState } from 'react';

/**
 * Generic hook for handling async functions in a React component
 * @returns Object with the following keys:
 *    data {*} -- return result of a successful async run. No data type is assumed.
 *    error {*} -- error from a failed async run. No data type is assumed
 *    loading {boolean} -- true if the async run is executing and not yet completed, false otherwise
 */
export default function useAsync(asyncFunc, onSuccess = null, onError = null) {
    if (typeof asyncFunc !== 'function') {
        throw new TypeError(`Expected function for argument 0 (asyncFunc), but received ${typeof asyncFunc}`);
    }
    if (onSuccess && typeof onSuccess !== 'function') {
        throw new TypeError(`Expected null or function for argument 2 (onSuccess), but received ${typeof onSuccess}`);
    }
    if (onError && typeof onError !== 'function') {
        throw new TypeError(`Expected null or function for argument 3 (onError), but received ${typeof onError}`);
    }

    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    /**
     * 
     * @param {function} asyncFunc -- main function to be executed
     * @param {Array} args         -- arguments to be passed into the function
     * @param {function} onSuccess -- function to execute upon success, using the returned value as the argument
     * @param {function} onError   -- function to execute upon error, using the caught error as the argument
     */
    const run = async (args = []) => {
        if (!Array.isArray(args)) {
            throw new TypeError(`Expected Array for argument 1 (args), but received ${typeof args}`);
        }

        setLoading(true);
        setResponse(null);

        try {
            const res = await asyncFunc(...args);
            setResponse({ data: res, success: true})
        } 
        catch(err) {
            setResponse({ data: err, success: false})
        }
        finally {
            setLoading(false);
        }
    };

    return {
        run,
        loading,
        success: (response == null) ? null : response.success,
        data: (response?.success === true) ? response?.data : null,
        error: (response?.success === false) ? null : response?.data
    };
}