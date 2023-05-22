// Search Bar Element Import
import React, { useState } from 'react';
// Stylesheet Import
import './searchbar.scss';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }
    return (
        <input
            id="searchbar"
            type="search"
            placeholder="Search"
            onChange={handleChange}
            value={searchInput} />
    )
}

export default SearchBar;