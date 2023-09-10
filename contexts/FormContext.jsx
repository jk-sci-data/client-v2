import { createContext, useState } from "react";

const FormContext = createContext();

/**
 * React context to store form input data.
 * Input data stored in `inputData` state.
 */
function FormProvider({ children, value }) {
    const [formData, setFormData] = useState({});

    const updateFormData = (name, value) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    handleInputChange = (evt) => {
        const input = evt.target;
        updateFormData(input.getAttribute('name'), input.value);
    }

    value = {
        formData, setFormData, updateFormData,
        handleInputChange,
        ...(value || {}),
    };

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export { FormContext, FormProvider };