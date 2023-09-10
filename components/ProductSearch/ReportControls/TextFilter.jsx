import React from 'react';

export default function TextFilter({textSearch=""}) {
    return (
        <div>
            <input className="searchTerm" value={textSearch}/>
        </div>
    )
}