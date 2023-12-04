
import { ProductSearchContext } from '../ProductSearchProvider';
import React, { useEffect, useContext } from 'react';


export default function ResultsNav(props) {
    const {page, filteredData, handlePageChange, limit} = useContext(ProductSearchContext);
    const total = filteredData.length;
    let numPages = Math.ceil(total / limit);
    const offset = (page-1) * limit;

    let options = [];
    for (let i=1; i<=numPages; i++) {
        options.push(<option key={i} value={i}>{i}</option>);
    }

    //if the current page# exceeds the max, set to max
    useEffect(() => {
        if (numPages && (page > numPages)) {
            handlePageChange(numPages);
        }
    });
    return (
    <div>
        <div className="page-nav">
            <button className="prev nav-btn" onClick={(evt) => handlePageChange(page-1, evt)} disabled={page <= 1}>{'< Prev'}</button>
            <div className="page-btn-div">
                <select className='page-nav-sel' name='page' onChange={(evt) => handlePageChange(evt.target.value, evt)} value={page || 1}>
                    {options}
                </select>
            </div>
            <button className="next nav-btn" onClick={(evt) => handlePageChange(page+1, evt)} disabled={page >= numPages}>{'Next >'}</button>
        </div>
        <div className="results-counter" style={{textAlign: "center"}}>
            <b>{offset + 1} - {Math.min(total, limit + offset)}</b> of <b>{total}</b> results.
        </div>
    </div>

    );
}
