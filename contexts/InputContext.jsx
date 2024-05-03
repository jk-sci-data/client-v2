import React, { createContext } from "react";
import useForm from "hooks/useForm";

const InputContext = createContext();

/**
 * React context to store form input data, which can be passed down from an input or button's container.
 * `value` is an Object to have any of its keys passed in through the Provider's value, except onChange and formData
 * `form` is an object returned from useForm(), containing `data` and `setValue`
 * `children` 
 */
function InputProvider(props) {
    console.log("props field", props.field);
    return (
        <InputContext.Provider value={{
            ...props.value,
            name: props.name,
            form: props.form, //has properties form.data and form.onChange
            field: props.field
        }}>
            {props.children}
        </InputContext.Provider>
    );
}

export { InputContext, InputProvider };