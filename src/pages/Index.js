import React from 'react';

const Index = ({ allCountries, fetchError, isLoading }) => {
    console.log(allCountries);

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {fetchError && <p>Error: {fetchError}</p>}
            {!isLoading && !fetchError &&
                <>
                    {allCountries.map((country, index) => {
                        return (
                            <h1 key={index}>{country.name.common}</h1>
                        )
                    })}
                </>}
        </>
    )
}

export default Index