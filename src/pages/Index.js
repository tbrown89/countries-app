import React from 'react';
import { IndexStyles, InputField, Countries } from '../components/styled/IndexStyles';
import { Container } from '../components/styled/Container';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Index = ({
    filteredCountries,
    filterByRegion,
    setFilterByRegion,
    searchValue,
    setSearchValue }) => {

    return (
        <>
            <Container>
                <IndexStyles>
                    <InputField>
                        <SearchBar
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                        />
                        <Dropdown
                            filterByRegion={filterByRegion}
                            setFilterByRegion={setFilterByRegion}
                        />
                    </InputField>
                    <Countries>
                        {!filteredCountries.length && <p>No Match</p>}
                        {filteredCountries.length && filteredCountries.map((country, index) => {
                            return (
                                <Link to={`/details/${country.name}`} key={index}>
                                    <Card
                                        flag={country.flags.svg}
                                        name={country.name}
                                        population={country.population}
                                        region={country.region}
                                        capital={!country.capital ? 'N/A' : country.capital}
                                    />
                                </Link>
                            )
                        })}
                    </Countries>
                </IndexStyles>
            </Container>
        </>
    )
}

export default Index