import React, { createContext } from "react";

const InputContext = createContext();

/**
 * React context to store form input data, which can be passed down from an input or button's container.
 * `value` is an Object to have any of its keys passed in through the Provider's value, except onChange and formData
 * `form` is an object returned from useForm(), containing `data` and `setValue`
 * `children` 
 */
function InputProvider(props) {
    return (
        <InputContext.Provider value={props}>
            {props.children}
        </InputContext.Provider>
    );
}

export { InputContext, InputProvider };