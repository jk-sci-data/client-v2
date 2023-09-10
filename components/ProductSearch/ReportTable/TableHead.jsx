
import React, {useState, useContext} from "react";
import { ProductSearchContext } from "../ProductSearchProvider";
import ColumnLabel from "./ColumnLabel.jsx";

/** A cell within the header */

/**
 *
 *
 * @param {Object} props {accessor, label, style, handleSorting}
 * @param {string} props.accessor - accessor
 * @return {*} 
 */
function ColumnHead(props) {
    const { handleSorting } = useContext(ProductSearchContext);
    const [ord, setOrd] = useState("none");

    const toggleOrd = () => {
        let newOrd = "asc";
        if (ord === "asc") newOrd = "desc";
        if (ord === "desc") newOrd = "none";
        setOrd(newOrd);
        return newOrd;
    }

    const handleClick = () => {
        const newOrd = toggleOrd();
        handleSorting(props.accessor, newOrd);
    }
    return (
        <th style={{"width": props.width || "auto"}} onClick={handleClick} className={'sort-' + ord} >
            <ColumnLabel {...props}/>
        </th>
    )
}


/**
 * The table's header
 *
 * @export
 * @param {Object} props - The component's props
 * @param {Array<Object>} props.columns - list of columns
 * @param {Object} props.style
 * @param {function} props.handleSorting
 * @return {JSX.Element} 
 */
export default function TableHead({style}) {
    const {columns} = useContext(ProductSearchContext);
    const e = (
        <thead style={style || {}}>
            <tr>
                { columns.map((c, i) => <ColumnHead key={c.accessor} {...c}/> ) }
            </tr>
        </thead>
    );
    return e;
}
