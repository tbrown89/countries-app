import React from 'react';
import { SearchBarStyles } from './styled/SearchBarStyles';

const SearchBar = ({ searchValue, setSearchValue }) => {
    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <form>
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