import React from 'react';
import { DetailsStyles, Flag, BorderCountries, CountryDetails, CardsWrapper } from '../components/styled/DetailsStyles';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/styled/Button';
import { Container } from '../components/styled/Container';
import { BsArrowLeft } from 'react-icons/bs';
import { CardStyles } from '../components/styled/CardStyles'

const Details = ({ data }) => {
    const { name } = useParams();
    const navigate = useNavigate();

    const country = data.find(country => country.name === name)
    console.log(data)


    const countryDataMain = {
        "Native Name": country?.nativeName,
        "Population": country?.population.toLocaleString(),
        "Region": country?.region,
        "Sub Region": country?.subregion
    };

    const countryDataSecondary = {
        "Top Level Domain": country?.topLevelDomain,
        "Currencies": !country?.currencies ? 'N/A' : country?.currencies.map(cur => cur.name).join(', '),
        "Languages": country?.languages.map(lang => lang.name).join(', ')
    }

    const generateData = (obj) => (
        <ul>
            {Object.entries(obj).map(([label, data], i) => {
                if (data) {
                    return <li key={i}>{label}: <span>{data}</span></li>
                }
                return null;
            })}
        </ul>
    )

    return (
        <DetailsStyles>
            <Container>
                <Button primary onClick={() => navigate(-1)}>
                    <BsArrowLeft /> Back
                </Button>
                <article>
                    <Flag
                        src={country.flags.svg}
                        alt={country.name}
                    />
                    <h2>{country.name}</h2>
                    {generateData(countryDataMain)}
                    {generateData(countryDataSecondary)}
                    <h3>Border Countries:</h3>
                    {country.borders.map((country, i) => (
                        <CardStyles border key={i}>
                            {country}
                        </CardStyles>
                    ))}
                </article>
            </Container>
        </DetailsStyles>
    )
}

export default Details