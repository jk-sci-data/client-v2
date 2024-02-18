import { createContext, useContext, useEffect } from "react";
import { AppContext } from "contexts/AppContext";
import useForm from "hooks/useForm.jsx";
import useFetch from "hooks/useFetch.jsx";

const ProductEditContext = createContext();

function ProductEditProvider({ children }) {
    const { productInfoEditaddProductData } = useContext(AppContext) || {};

    const searchParams = new URLSearchParams(window.location.search);
    const productId = searchParams.get("id");
  
    const postUrl = process.env.REACT_APP_API_URL + "/api/update-product-info";
    const getUrl = process.env.REACT_APP_API_URL + `/api/product-info/${productId}`;

    const [fetchedData, setFetchedData] = useState(null);
    const postFetch = useFetch();
    const getFetch = useFetch();
    const form = useForm();

    const handleFileUpload = (evt) => {
      console.log("todo; handle upload");
    }
  
    const handleSaveBtn = async (evt) => {
      /** todo: validate form info is valid */
      console.log("save button clicked", formData);
      postFetch.doFetch(postUrl, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ data: [{ ...formData, product_id: productId }] })
      });
      console.log("save response", response);
    }
  
    const handleCancelBtn = (evt) => {
      console.log("cancelled");
      /** TODO: Reset the form */
      form.setData(fetchedData);
    }
  
    useEffect(() => {
      console.log("this is the apiurl", getUrl);
      getFetch.doFetch(getUrl, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        },
        credentials: "include"
      });
    }, []);
  
    useEffect(() => {
      const {data, error} = getFetch;
      if (data) {
        form.setData(data[0]['data']);
        setFetchedData(data[0]['data']);
      }
  
      if (error)
        console.log("getFetch error:", error);
    }, [getFetch.data]);
    
    const value = {
        searchParams, productId,
        productInfoEditaddProductData,
        form, postFetch, getFetch,
        handleSaveBtn, handleCancelBtn, handleFileUpload
    }

    return <ProductEditContext.Provider value={value}>
        {children}
    </ProductEditContext.Provider>
}

export { ProductEditContext, ProductEditProvider };