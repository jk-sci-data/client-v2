
import React from 'react';
import SearchBar from "./SearchBar";

export default function SearchForm({searchInput=""}) {
    return (
    <section className="text-center wrap">
        <div className="center">
            <div className="logo mr-auto">
            <   a href="/"><img src="/assets/img/Logo-1.svg" style={{"width": "300px"}} alt="logo" /></a>
            </div>
            <div className="col-lg-12 mt-5">
                <SearchBar searchInput={searchInput} />
            </div>
        </div>
    </section>
    )
}