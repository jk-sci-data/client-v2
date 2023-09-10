import React, {useContext } from "react";
import { ProductSearchContext } from "../ProductSearchProvider";
import DiscreteFilter from "./DiscreteFilter";
import RangeFilter from "./RangeFilter";

/**
 * 
 * @param {Array<Object>} rangeFilters - props for all range filters, including what to render and current min/max values
 * @param {Array<Object>} discreteFilters - props for all discrete (checkbox) filters, including what to render and current checked values
 * @param {columns} handleFilter - controller's handleFilter function, which takes one Filter object as an input
 * @returns 
 */
export default function FilterSidebar(props) {
    const { rangeFilters, discreteFilters } = useContext(ProductSearchContext);
    return (
    <div className="filters-sidebar" style={{display:"flex", flexDirection:"column"}}>
        {discreteFilters && discreteFilters.map(d => <DiscreteFilter key={d.accessor} {...d}  />)}
        {rangeFilters && rangeFilters.map(r => <RangeFilter key={r.accessor} {...r} />)}
    </div>
    );
}

