import React from "react";
import "./search.css";

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search nykaa</span>
        </label>
        <input
            className="searchBar"
            type="text"
            id="header-search"
            placeholder="Search Nykaa"
            name="s" 
        />
    </form>
);

export default SearchBar;