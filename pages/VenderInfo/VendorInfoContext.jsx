import { createContext, useContext, useEffect, useState } from "react";
import { AppContext } from "contexts/AppContext";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useQuery, useMutation } from "@tanstack/react-query";

const VendorInfoContext = createContext();

const prefixUrl = process.env.REACT_APP_API_URL + "/api";

function VendorInfoProvider({ children }) {
  const form = useForm();
  const { auth } = useContext(AppContext);
  console.log("this is auth", auth);

  const vendorId = useMemo(() => {
    const {account} = auth;
    return account?.orgId;
  }, [auth?.account]);

  const { register, control, handleSubmit } = form;

  const { data: fetchedData } = useQuery({
    queryKey: ["vendor-info", vendorId], 
    queryFn: async () => {
      const res = await fetch(`${prefixUrl}/vendor-info/${vendorId}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",         
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.accessToken}`
        },
      });
      return res.json();
    },
    enabled: !!vendorId,
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
    mutationFn: async ({ formData }) => {
      if (!auth.accessToken) {
        throw new Error("No accessToken");
      }
      const res = await fetch(`${prefixUrl}/vendor-info`, {
        method: "PUT",
        mode: "cors",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.accessToken}`
        },
        body: JSON.stringify({ data: [{ ...formData, vendor_id: vendorId }] })
      });
      return res;
    }
  });


  const onSubmit = async (evt) => {
    const formData = form.getValues();
    console.log("submitting formdata", formData);
    const res = await saveFormData({formData});
  }

  
  const handleAddOption = () => {};
  const radioOptions = [];

  return {
    form, register, control, handleSubmit,
    onSubmit,
  }
}


