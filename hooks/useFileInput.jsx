import React, { useState } from "react";

/**
 * React context to store form input data, which can be passed down from an input or button's container.
 */
export default function useFileInput() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("filechanged", file);
        setSelectedFile(file);
    };

    return {
        handleFileChange,
        selectedFile
    };
}
