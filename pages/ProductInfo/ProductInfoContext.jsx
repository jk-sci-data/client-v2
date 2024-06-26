import React, { createContext, useMemo } from "react";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { useQuery, useMutation } from '@tanstack/react-query';

const ProductInfoContext = createContext();
const showDevTool = false;

const baseUrl = `${process.env.REACT_APP_API_URL}/api`;

function ProductInfoProvider({ children }) {
    const form = useForm();
    
    const searchTerm = form?.watch("searchTerm", "");

    const { data: fetchedData, refetch, isLoading } = useQuery({
        queryKey: ['product-search'/*, searchTerm*/],
        queryFn: async ({ queryKey }) => {
            console.log("product-search query called");
            //const [_key, searchTerm] = queryKey;
            const queryParams = new URLSearchParams({
                "filter": `title_en eq '~~%${searchTerm}%' or title_cn eq '~~%${searchTerm}%'`
            });

            const res = await fetch(`${baseUrl}/product-info-list?${queryParams.toString()}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                },
                credentials: "include"
            });
            if (!res.ok) {
                console.log("Failed to fetch");
                return [];
            }
            console.log("product-info fetched", res);
            return res.json();
        },
        enabled: false
    });

    const value = {
        form: form, fetchedData, refetch, isLoading,
        searchTerm
    };

    return (
        <ProductInfoContext.Provider value={value}>
            {children}
            {showDevTool && <DevTool control={form.control} />}
        </ProductInfoContext.Provider>
    );
}

export { ProductInfoContext, ProductInfoProvider };