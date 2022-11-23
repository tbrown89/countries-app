import React from 'react';
import { SearchBarStyles } from './styled/SearchBarStyles';

const SearchBar = ({ inputValue, setInputValue }) => {
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form>
            <SearchBarStyles
                type='search'
                value={inputValue}
                onChange={handleChange}
                placeholder='Search for a country...'
            />
        </form>
    )
}

export default SearchBar