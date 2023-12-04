
import React, { useState, useContext, useEffect } from "react";
import { ProductSearchContext } from "../ProductSearchProvider";
//import { AppContext } from "contexts/AppContext";
/**
 *
 *
 * @param {Object} props -  
 * @param {string} props.accessor
 * @return {JSX.Element} 
 */
export default function RangeFilter({ accessor }) {
    //const { trackEvent } = useContext(AppContext);
    const { handleRangeFilterChange, columns, rangeFilters } = useContext(ProductSearchContext);
    const [unit, setUnit] = useState("");
    const [values, setValues] = useState({});

    const rangeFilter = rangeFilters.find(r => r.accessor === accessor);
    const { labelBefore, labelAfter, unitList, tabindex, step } = rangeFilter;

    if (!rangeFilter)
        return <div>Invalid range filter accessor: "{accessor}"</div>

    const col = columns.find(c => c.accessor === accessor);
    const label = col?.label || accessor;

    const mult = unitList?.find(u => u.unit === unit)?.mult || 1;

    const handleFilterChange = (evt) => {
        const { name, value } = evt.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    }


    const handleFilterBlur = (evt) => {
        const baseVal = evt.target.value;
        const name = evt.target.name;
        const val = baseVal * mult;
        handleRangeFilterChange(accessor, name, val);
        // trackEvent({
        //     "category": "Filter range",
        //     "action": accessor,
        //     "name": name,
        //     "value": val
        // });

    }

    const handleUnitChange = (evt) => {
        const val = evt.target.value;
        setUnit(val);
        // trackEvent({
        //     "category": "Filter range unit",
        //     "action": accessor,
        //     "name": `${val}`
        // });
    };

    /** If a unit is present, multiply the input by mult when updating the filter, and divide it when read it in */
    return (
        <div className="filters mt-3" data-field={accessor}>
            <h2>{label}</h2>
            <div className="range-filter" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", fontSize: "90%" }}>
                <div className="other_amount" style={{ paddingLeft: "2px", paddingRight: "2px" }}>
                    <label className="label-inline">
                        {labelBefore && <span>{labelBefore}</span>}
                        <input className="min" type="number" name="minValue"
                            step={step || "any"}
                            tabIndex={tabindex || 0}
                            min="0"
                            value={values['minValue'] || ""}
                            onChange={handleFilterChange}
                            onBlur={handleFilterBlur}
                        />
                        {labelAfter && <span>{labelAfter}</span>}
                    </label>
                </div>
                <div className="other_amount" style={{ paddingLeft: "2px", paddingRight: "2px" }}>
                    <label className="label-inline">
                        {labelBefore && <span>{labelBefore}</span>}
                        <input className="max" type="number" name="maxValue"
                            step={step || "any"}
                            min="0"
                            tabIndex={tabindex || 0}
                            value={values['maxValue'] || ""}
                            onChange={handleFilterChange}
                            onBlur={handleFilterBlur}
                        />
                        {labelAfter && <span>{labelAfter}</span>}
                    </label>
                </div>
                {unitList?.length &&
                    <div className="other_amount" style={{ gridColumn: "1 / 3" }}>
                        <label className="label-inline">
                            <select className="unit" name="unit" value={unit} onChange={handleUnitChange} style={{ border: "none", width: "5em", fontSize: "90%" }}>
                                {unitList.map((u, i) => (<option key={u.unit} value={u.unit}>{u.unit}</option>))}
                            </select>
                        </label>
                    </div>
                }
            </div>
        </div>
    );
}
