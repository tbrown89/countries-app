import React from 'react';
import { CountryCard, CardContent } from './styled/CardStyles';

const Card = ({ flag, name, population, region, capital }) => {
    return (
        <CountryCard>
            <img src={flag} alt={name} />
            <CardContent>
                <h2>{name}</h2>
                <ul>
                    <li>Population: <span>{population.toLocaleString()}</span></li>
                    <li>Region: <span>{region}</span></li>
                    <li>Capital: <span>{capital}</span></li>
                </ul>
            </CardContent>
        </CountryCard>
    )
}

export default Card