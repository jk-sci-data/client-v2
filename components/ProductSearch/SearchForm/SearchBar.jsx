import React, {useEffect, useState, useRef} from 'react';

/**
 *
 *
 * @export
 * @param {Object} props
 * @param {string} props.searchInput
 * @return {JSX.Element} 
 */
export default function SearchBar({searchInput}) {
    const [search, setSearch] = useState(searchInput || "");
    const inputRef = useRef(null);
    const buttonRef = useRef(null);

    const handleChange = (evt) => {
        const input = evt.target.value || "";
        setSearch(input);
    }

    /** Use the search input to generate and go to a results URL */
    const handleSearch = (evt) => {
        console.log("handleSearch called")
        const input = search.trim();
        if (input) {
            const queryString = new URLSearchParams({ "q": input }).toString();
            window.location.href = "/product-search?" + queryString;
        }
    }

    useEffect((evt) => {
        inputRef.current.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                buttonRef.current.click();
            }
        });
    });
    return (
    <div className="search">
        <input ref={inputRef} type="text" className="searchTerm" placeholder="CAS号、货号、品名…" value={search || ""} onChange={handleChange} />
        <button ref={buttonRef} type="submit" className="searchButton" onClick={handleSearch}>
            <img src="/assets/img/Search.svg" width="20px" alt="search-icon"/>
        </button>
    </div>
    )
}