import React, { useState, useEffect, createContext } from 'react';
import config from "./config.js";
import { toFilterQuery } from 'common.js';
//import { trackEvent } from 'matamo.js';

const searchUrl = process.env.REACT_APP_API_URL + "/api/products";
const columns = config.columns.map(d => Object.assign(d, { 'sortable': true }));


const ProductSearchContext = createContext();
/**
*
*
* @param {string} q - getQueryVariable("q")
* @return {Promise.Array} 
*/
async function getDataQuery(q, vendor = null) {
    const qryString = new URLSearchParams({ filter: toFilterQuery(q) }).toString();

    const vdr = (vendor) ? ("/" + vendor) : ""
    console.log("searching in", `${searchUrl}${vdr}?${qryString}`);
    const data = await fetch(`${searchUrl}${vdr}?${qryString}`).then(r => r.json()).then(r => r['data']);
    console.log("fetched data:\n", data);
    let data2 = data.map((d, i, arr) => {
        let d2 = {};
        for (let [k, v] of Object.entries(d)) {
            let val = (typeof v === 'string' || v instanceof String) ? v.trim() : v;
            if (k === 'title' && !val) {
                val = String(d['title_cn']).trim();
            }
            d2[k] = {
                'value': val,
                'display': val || ""
            };
        }

        if (d['title_cn'] && (d['title_cn'] || "").trim() != (d['title_en'] || "").trim()) {
            d2['title']['display'] = `${d['title']}<br><span class="smaller">${d['title_cn']}</span>` //todo: do not make this innerHTML
        }
        if (d['size']) {
            d2['size_norm']['display'] = d['size'];
        }
        d2['is_instock']['display'] = (d['is_instock'] == 0) ? 'NO' : (d['is_instock'] == 1) ? 'YES' : '??';
        d2['__idx'] = i;
        return d2;
    });
    return data2;
}

function ProductSearchProvider({ query, children }) {
    const [fetched, setFetched] = useState(null);
    const [sorter, setSorter] = useState([]);
    const [textFilter, setTextFilter] = useState("");
    const [discreteFilters, setDiscreteFilters] = useState(config.discreteFilters || []);
    const [rangeFilters, setRangeFilters] = useState(config.rangeFilters || []);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(50); //todo: make limit settable

    useEffect(() => {
        if (query && fetched===null) {
            setFetched([]);
            const start = performance.now();
            getDataQuery(query, null).then((data) => {
                const end = performance.now();
                setFetched(data);
                // trackEvent({
                //     "category": "Product search",
                //     "action": query,
                //     "name": `Completed in ${((end - start) / 1000).toFixed(2)} sec`,
                //     "value": data.length
                // });
            });
        }
    }, [query, fetched]);

    /** applies another sorting criteria onto the state's list of sorts */
    const handleSorting = (accessor, ord) => {
        let newSorter = (sorter || []).filter(s => s.accessor !== accessor);
        if (["asc", "desc"].includes(ord)) {
            newSorter.unshift({ accessor: accessor, order: ord })
        }
        setSorter(newSorter);
        // trackEvent({
        //     "category": "Table UI",
        //     "action": "Sort",
        //     "name": accessor,
        //     "value": { "asc": 1, "desc": -1 }[ord] || 0
        // });
    }

    const handleTextFilterChange = (value) => {
        setTextFilter(value);
    }

    const handleDiscreteFilterChange = (accessor, values) => {
        let filter = { accessor, values };
        let newFilters = discreteFilters.map(f => {
            if (f.accessor === accessor)
                return Object.assign(f, filter);
            return f;
        });
        setDiscreteFilters(newFilters);
    }

    const handleRangeFilterChange = (accessor, fieldName, value) => {
        let filter = { accessor: accessor };
        filter[fieldName] = value;
        let newFilters = rangeFilters.map(f => {
            if (f.accessor === accessor)
                return Object.assign(f, filter);
            return f;
        });
        setRangeFilters(newFilters);
    }

    const handlePageChange = (page, evt = null) => {
        setPage(page);
        if (evt) {
            // trackEvent({
            //     "category": "Table UI",
            //     "action": "Page change",
            //     "name": evt.target.tagName,
            //     "value": page
            // });
        }

    }

    const getFilterFunc = () => {
        return (e, i, arr) => {
            for (let f of (rangeFilters || [])) {
                let { accessor, minValue, maxValue } = f;
                let min = parseFloat(minValue);
                let max = parseFloat(maxValue);
                if (isNaN(min) && isNaN(max))
                    continue;

                let val = parseFloat(e[accessor].value);
                if (isNaN(val))
                    return false;

                if (!isNaN(min) && val < min)
                    return false;

                if (!isNaN(max) && val > max)
                    return false;
            }

            for (let f of (discreteFilters || [])) {
                let { accessor, values } = f;
                if (f.values == null) continue;
                let val = e[accessor].value;
                if (val == null) val = "";
                if (!values.map(v => String(v)).includes(String(val))) {
                    return false;
                }
            }
            return true;
        }
    }

    const getSortFunc = () => {
        return (a, b) => {

            for (let s of sorter.concat([{ 'accessor': '__idx', 'order': "asc" }])) {
                const { accessor, order } = s;
                const ord = { "asc": 1, "desc": -1 }[order] || 0;
                if (ord) {
                    const aVal = a[accessor].value || "";
                    const bVal = b[accessor].value || "";
                    if (aVal < bVal) return -1 * ord;
                    if (aVal > bVal) return 1 * ord;
                }
            }
            return 0;
        }
    }

    const start = (page - 1) * limit;
    const end = page * limit - 1;
    const filterFunc = getFilterFunc();
    const sortFunc = getSortFunc();
    const filteredData = (fetched || []).filter(filterFunc).sort(sortFunc);
    const tableData = filteredData.slice(start, end);

    const value = {
        "fetched": fetched,
        "columns": columns,
        "page": page,
        "limit": limit,
        "handleSorting": handleSorting,
        "handleDiscreteFilterChange": handleDiscreteFilterChange,
        "handleRangeFilterChange": handleRangeFilterChange,
        "handleTextFilterChange": handleTextFilterChange,
        "handlePageChange": handlePageChange,
        "rangeFilters": rangeFilters,
        "discreteFilters": discreteFilters,
        "textFilter": textFilter,
        "filteredData": filteredData,
        "tableData": tableData
    };

    return (
        <ProductSearchContext.Provider value={value}>
            {children}
        </ProductSearchContext.Provider>
    );
}

export { ProductSearchContext, ProductSearchProvider };