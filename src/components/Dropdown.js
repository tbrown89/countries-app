import React from 'react';
import { DropdownStyles } from './styled/DropdownStyles';

const Dropdown = ({ filterByRegion, setFilterByRegion }) => {
    const handleChange = (e) => {
        setFilterByRegion(e.target.value.toLowerCase());
    };

    return (
        <DropdownStyles
            onChange={handleChange}
            value={filterByRegion}>
            <option value='all'>Filter by Region</option>
            <option value='africa'>Africa</option>
            <option value='americas'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
        </DropdownStyles>
    )
}

export default Dropdown