import React, { useContext, useState, useEffect } from "react";
import { ProductSearchContext } from "../ProductSearchProvider.jsx";
import TableHead from "./TableHead.jsx";
//import { AppContext } from "../../../contexts/AppContext/index.js";


/** A data cell within the table's body */
function DataCell({ value, display, style = {} }) {
    const innerHTML = { __html: display || value }
    const e = (
        <td style={style || {}} dangerouslySetInnerHTML={innerHTML}></td>
    );
    return e;
}

/**
 * 
 * @param {Array<Object>} data 
 * @param {columns} 
 * @returns 
 */
export default function ReportTable() {
    const { columns, tableData } = useContext(ProductSearchContext);
    //const { trackEvent } = useContext(AppContext);
    let hoveredRow = null;
    let hoveredStartTime = null;

    function handleTableRowHover(event, index) {
        hoveredStartTime = Date.now();
        hoveredRow = index;
    }

    const minHoverDuration = 3000;
    function handleTableRowUnhover(event, rowName) {
        const hoverDuration = Date.now() - hoveredStartTime;
        if (hoverDuration >= minHoverDuration) {
            // trackEvent({
            //     category: 'Table UI',
            //     action: `Row hover for ${hoverDuration} ms`,
            //     name: rowName,
            //     value: hoveredRow
            // });
        }
        hoveredRow = null;
        hoveredStartTime = null;
    }

    return (
        <table className="reportTable" style={{ tableLayout: "fixed" }}>
            <TableHead />
            <tbody>{
                tableData.map((r, i) => {
                    const rowData = columns.map((c) => {
                        const key = c.accessor;
                        const d = r[key];
                        return {key: key, value: d.value, display: d.display};
                    });

                    return(
                        <tr key={r.__idx}
                            onMouseOver={(evt) => handleTableRowHover(evt, r.__idx)}
                            onMouseLeave={(evt) => handleTableRowUnhover(evt, JSON.stringify(rowData.map(d => d.display)))}>
                            { rowData.map(d => <DataCell {...d}/>) }
                        </tr>
                    );
                })
            }</tbody>
        </table>
    );
}

