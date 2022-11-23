import React from 'react';
import { IndexStyles, InputField, Countries } from '../components/styled/IndexStyles';
import { Container } from '../components/styled/Container';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import Card from '../components/Card';

const Index = ({ allCountries, fetchError, isLoading, filteredCountries, filterByRegion, setFilterByRegion, inputValue, setInputValue }) => {

    return (
        <>
            <Container>
                {isLoading && <p>Loading...</p>}
                {fetchError && <p>Error: {fetchError}</p>}
                {!isLoading && !fetchError &&
                    <IndexStyles>
                        <InputField>
                            <SearchBar
                                inputValue={inputValue}
                                setInputValue={setInputValue}
                            />
                            <Dropdown
                                filterByRegion={filterByRegion}
                                setFilterByRegion={setFilterByRegion}
                            />
                        </InputField>
                        <Countries>
                            {filteredCountries.map((country, index) => {
                                return (
                                    <Card
                                        key={index}
                                        flag={country.flags.svg}
                                        name={country.name.common}
                                        population={country.population}
                                        region={country.region}
                                        capital={country.capital}
                                    />
                                )
                            })}
                        </Countries>
                    </IndexStyles>}
            </Container>
        </>
    )
}

export default Index