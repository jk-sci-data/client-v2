import { ProductSearchProvider } from "./ProductSearchProvider";
import ProductSearchResults from "./ProductSearchResults";
import {SearchForm} from "./SearchForm";
import React, { useEffect } from "react";
import { getQueryVariable } from "../../common";

export default function ProductSearch() {
    const query = getQueryVariable("q");
    useEffect(() => {
        if (query)
            document.title += ` - Product search results for "${query}"`
        else
            document.title += ` - Product search`
    });

    if (query) {
        return (
        <section>
            <ProductSearchProvider query={query}>
                <ProductSearchResults />
            </ProductSearchProvider>
        </section>
        );
    }

    return <SearchForm />;
}

