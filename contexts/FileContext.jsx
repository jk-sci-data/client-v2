import React, { useState, createContext } from "react";

const FileContext = createContext();

/**
 * React context to store form input data, which can be passed down from an input or button's container.
 */
function FileProvider({ children, value }) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("filechanged", file);
        setSelectedFile(file);
    };

    return <FileContext.Provider value={{
        ...value,
        selectedFile,
        handleFileChange
    }}>
        {children}
    </FileContext.Provider>
}

export { FileContext, FileProvider };