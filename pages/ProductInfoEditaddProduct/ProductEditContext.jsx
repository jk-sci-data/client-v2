import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "contexts/AppContext";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useQuery, useMutation } from "@tanstack/react-query";

const ProductEditContext = createContext();

const prefixUrl = process.env.REACT_APP_API_URL + "/api";

function ProductEditProvider({ children }) {
  const { constants } = useContext(AppContext) || {};
  const { productInfoEditaddProductData } = constants || {};

  const searchParams = new URLSearchParams(window.location.search);
  const productId = searchParams.get("id"); //assume new product if no ID

  const form = useForm({
    defaultValues: {
      "title_en": "",
      "sku": "",
      "purity": "",
      "shelf_life_months": "",
      "status": "",
      "package": "",
      "other_purity": "",
      "title_cn": "",
      "molecular_weight": "",
      "flash_point": "",
      "boiling_point": "",
      "standard_pkg": "yes",
      "cas": "",
      "molecular_formula": "",
      "melting_point": "",
      "mfcd": "",
      "catalog_price": "",
      "closing_price": "",
      "invoice_type": "commercial",
      "freight": "no",
      "tax_included": "no",
      "hazardous": "no",
      "specialty": "no",
      "advantageous": "no",
      "customized": "no", //todo: change options
      "other_expenses": "",
      "catalog_currency": "",
      "closing_currency": "",
      "selling_price": "",
      "freight_cost": "",
      "tax_rate": "",
      "price_expiration": "",
      "restrictions": "",
      "packaging_cost": "",
      "other_cost": "",
      "comments": "",
      "file": ""
    }
  });

  const { data: fetchedData } = useQuery({
    queryKey: ["product-info", productId],
    queryFn: async () => {
      const r = await fetch(`${prefixUrl}/product-info/${productId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        },
        credentials: "include"
      });
      return r.json();
    },
    enabled: !!productId,
    retry: false
  });

  useEffect(() => {
    if (!fetchedData)
      return;

    const dataEntry = fetchedData?.[0]?.['data'];
    if (dataEntry) {
      form.reset(dataEntry);
    }
  }, [fetchedData]);

  const { mutateAsync: saveFormData } = useMutation({
    mutationFn: async ({ formData, productId }) => {
      const res = await fetch(`${prefixUrl}/product-info`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        credentials: "include",
        method: "PUT",
        body: JSON.stringify({ data: [{ ...formData, product_id: productId }] })
      });
      return res.json();
    }
  });

  const { mutateAsync: saveNewFormData } = useMutation({
    mutationFn: async ({ formData }) => {
      const res = await fetch(process.env.REACT_APP_API_URL + "/api/product-info", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        },
        credentials: "include",
        method: "POST",
        body: JSON.stringify({ data: [{ ...formData }] })
      });
      return res.json();
    }
  });

  /*
  todo: make fileupload part of the form submission
    const { mutateAsync: uploadFile} = useMutation({
      mutationFn: async () => {
        //todo
      }
    });
  
    const handleFileUpload = (evt) => {
      console.log("todo; handle upload");
    }
  */

  const handleSaveBtn = async (evt) => {
    /** todo: validate form info is valid */
    const formData = form.getValues();
    console.log("save button clicked", formData);
    let response;
    if (productId)
      response = await saveFormData({ formData, productId });
    else
      response = await saveNewFormData({ formData });
    console.log("save response", response);
  }

  const handleCancelBtn = (evt) => {
    console.log("cancelled");
    form.reset();
  }

  const value = {
    searchParams, productId,
    productInfoEditaddProductData,
    form,
    handleSaveBtn, handleCancelBtn
  }

  return <ProductEditContext.Provider value={value}>
    {children}
    {false && <DevTool control={form.control} />}
  </ProductEditContext.Provider>
}

export { ProductEditContext, ProductEditProvider };