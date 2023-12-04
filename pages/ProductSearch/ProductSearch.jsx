import { ProductSearchProvider } from "./ProductSearchProvider";
import ProductSearchResults from "./ProductSearchResults";
import { SearchForm } from "./SearchForm";
import React, { useEffect } from "react";
import { getQueryVariable } from "common.js";
import MainApp from "components/MainApp";

import "./ProductInfoEditaddProduct.sass";

export default function ProductSearch() {
    const query = getQueryVariable("q");
    console.log("mainApp imported to ProductSearch", MainApp);
    useEffect(() => {
        if (query)
            document.title += ` - Product search results for "${query}"`
        else
            document.title += ` - Product search`
    });

    return (
        <MainApp>
            {
                (query) ? (

                    <ProductSearchProvider query={query}>
                        <ProductSearchResults />
                    </ProductSearchProvider>

                ) : <SearchForm />
            }
        </MainApp>
    );
}

