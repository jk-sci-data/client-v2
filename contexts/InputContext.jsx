import React, { createContext } from "react";

const InputContext = createContext();

/**
 * React context to store form input data, which can be passed down from an input or button's container.
 */
function InputProvider({children, value}) {
    return <InputContext.Provider value={value}>{children}</InputContext.Provider>
}

export {InputContext, InputProvider};