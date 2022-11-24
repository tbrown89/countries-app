import React from 'react';
import { SearchBarStyles } from './styled/SearchBarStyles';

const SearchBar = ({ searchValue, setSearchValue }) => {
    const handleSubmit = e => e.preventDefault();

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };


    return (
        <form onSubmit={handleSubmit}>
            <SearchBarStyles
                type='search'
                value={searchValue}
                onChange={handleChange}
                placeholder='Search for a country...'
            />
        </form>
    )
}

export default SearchBar