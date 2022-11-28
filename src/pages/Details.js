import React, { useEffect } from 'react';
import { DetailsStyles, Flag, BorderCountries, BorderCardWrapper, CountryDataWrapper } from '../components/styled/DetailsStyles';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Button } from '../components/styled/Button';
import { Container } from '../components/styled/Container';
import { BsArrowLeft } from 'react-icons/bs';
import { BorderCard } from '../components/styled/CardStyles'
import { byIso } from 'country-code-lookup';

const Details = ({ data }) => {
    const { name } = useParams();
    const navigate = useNavigate();

    console.log(data);

    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const country = data.find(country => country.name === name)

    const countryDataMain = {
        "Native Name": country?.nativeName,
        "Population": country?.population.toLocaleString(),
        "Region": country?.region,
        "Sub Region": country?.subregion,
        "Capital": country?.capital
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
                    <div>
                        <Flag
                            src={country.flags.svg}
                            alt={country.name}
                        />
                    </div>
                    <div>
                        <h2>{country.name}</h2>
                        <CountryDataWrapper>
                            <div>
                                {generateData(countryDataMain)}
                            </div>
                            <div>
                                {generateData(countryDataSecondary)}
                            </div>
                        </CountryDataWrapper>
                        <BorderCountries>
                            <h3>Border Countries:</h3>
                            <BorderCardWrapper gap='10px'>
                                {Array.isArray(country?.borders) ? country.borders.map((country, i) => (
                                    <BorderCard jc='center' ai='center' key={i}>
                                        {byIso(country).country}
                                    </BorderCard>
                                )) : <BorderCard jc='center' ai='center'>None</BorderCard>}
                            </BorderCardWrapper>
                        </BorderCountries>
                    </div>
                </article>
            </Container>
        </DetailsStyles>
    )
}

export default Details