import React, { useState, useContext } from "react";
import { ProductSearchContext } from "../ProductSearchProvider";


export default function DiscreteFilter({ accessor, collapsed = true, collapsedTo = 3 }) {
    const { fetched, columns, discreteFilters, handleDiscreteFilterChange } = useContext(ProductSearchContext);
    const [isCollapsed, setIsCollapsed] = useState(!!collapsed);
    const discreteFilter = discreteFilters.find(d => d.accessor === accessor);

    if (!discreteFilter)
        return <div>Invalid discrete filter accessor "{accessor}"</div>;

    const { values } = discreteFilter;

    const col = columns.find(c => c.accessor === accessor);
    const label = col?.label || accessor;

    const toggleCollapse = (evt) => {
        if (evt.target.classList.contains("expand-btn")) {
            setIsCollapsed(false);
        } else {
            setIsCollapsed(true);
        }
    }
    let filterCounts = {}; //<accessor_value, Object<count, display>>
    fetched.forEach((d, i) => {
        const entry = d[accessor] || { display: "N/A", value: null };
        let { display, value } = entry;
        value = (value == null) ? "" : value;
        display = display || value;
        if (!filterCounts[value])
            filterCounts[value] = { display: display, count: 0 };
        filterCounts[value].count += 1;
    });
    let checkedValues;
    if (values == null) {
        checkedValues = Array.from(Object.keys(filterCounts));
    } else {
        checkedValues = values;
    }

    const handleFilterChange = (evt, value) => {
        let newValues;
        let checked = (evt.target.checked) ? 1 : 0;
        if (checked) {
            newValues = checkedValues.concat([value]);
        } else {
            newValues = checkedValues.filter(v => v != value);
        }
        handleDiscreteFilterChange(accessor, newValues);
        // trackEvent({
        //     category: `Filter checkbox`,
        //     action: accessor,
        //     name: value,
        //     value: checked
        // });
    };

    const slicer = (isCollapsed) ? [0, collapsedTo] : [];
    let checklist = Array.from(Object.entries(filterCounts))
        .sort((a, b) => {
            if (a[0] == null || a[0] === "") return 1;

            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        })
        .slice(...slicer)
        .map(e => {
            const [value, info] = e;
            const checked = checkedValues.includes(value);
            return (
                <label className="custom-control material-checkbox" key={value}>
                    <input type="checkbox" className="material-control-input"
                        onChange={(evt) => handleFilterChange(evt, value)} checked={checked}
                    />
                    <span className="material-control-indicator"></span>
                    <span className="material-control-description">{info.display || value} <small>({info.count || 0})</small></span>
                </label>
            );
        });
    return (
        <div className="filters mt-3" data-field={accessor}>
            <div className="filter-header" style={{ "position": "relative" }}>
                <h2>{label}</h2>
                {(Object.entries(filterCounts).length > collapsedTo) &&
                    <div className="filter-header-btn-div" style={{ "position": "absolute", "right": "0px", "bottom": "0px", "textAlign": "right" }}>
                        <button className={isCollapsed ? "expand-btn" : "collapse-btn"} onClick={toggleCollapse}>
                            {(isCollapsed) ? "(Show All)" : "(Show Less)"}
                        </button>
                    </div>
                }
            </div>
            <div className="checkbox-container">
                {checklist}
            </div>
        </div>
    )
}