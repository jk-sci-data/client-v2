
import React from 'react';
import SearchBar from "./SearchBar";

export default function SearchHeader({searchInput=""}) {
    return (
    <header>
        <div className="container" style={{margin:'auto', maxWidth:'1280px', display:'grid', gridTemplateColumns: '210px 1fr'}}>
            <div className="logo mr-auto">
                <a href="/"><img src="/assets/img/Logo-1.svg" alt="logo" style={{width: '200px'}}/></a>
            </div>
            <div id="search-container">
                <SearchBar searchInput={searchInput} />
            </div>
        </div>
    </header>
    );
}