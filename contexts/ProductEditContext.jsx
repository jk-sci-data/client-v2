import { createContext, useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import { FormContext } from "./FormContext";

const ProductEditContext = createContext();

function ProductEditProvider({ children }) {
    const { productInfoEditaddProductData } = useContext(AppContext) || {};
    const { formData, setFormData } = useContext(FormContext) || {};

    handleFileUpload = (evt) => {
        console.log("todo; handle upload");
    }

    handleSaveButon = (evt) => {
        const saveBtn = evt.target;
        saveBtn.disabled = true;

        console.log("save button clicked", formData);
        /** TODO: Function to save formData to database */
        saveBtn.disabled = false;
    }

    const value = {
        ...(productInfoEditaddProductData || {}),
        formData, setFormData,
        handleFileUpload,
        handleSaveButon,
    }

    return <ProductEditContext.Provider value={value}>
        <FormProvider>
            <div className="product-edit-provider">{children}</div>
        </FormProvider>
    </ProductEditContext.Provider>
}

export { ProductEditContext, ProductEditProvider };