import styled from "styled-components";
import { Flex } from '../styled/Mixins';

export const DetailsStyles = styled.section`
    margin: 2.5rem 0;

    @media screen and (min-width: 768px) {
        margin: 5rem 0;
    }

    article {

        @media screen and (min-width: 1200px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10%;

            &>* {
                flex-basis: 100%;
            }
        }
    }

    h2 {
        font-size: 1.375rem;
        margin-bottom: 1rem;

        @media screen and (min-width: 768px) {
            font-size: 2rem;
        }
    }

    h3 {
        font-size: 1rem;
        font-weight: 400;
    }

    ul {
        margin-bottom: 2rem;
        line-height: 2.29;

        @media screen and (min-width: 768px) {
            margin-bottom: 4rem;
        }
    }

    li {
        font-size: 14px;

        @media screen and (min-width: 768px) {
            font-size: 1rem;
        }
    }
`;

export const Flag = styled.img`
    width: 100%;
    aspect-ratio: 5 / 3;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 2.75rem;

    @media screen and (min-width: 768px) {
        border-radius: 10px;
    }

    @media screen and (min-width: 1200px) {
        margin: 0;
    }
`;

export const CountryDataWrapper = styled.div`
    
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 2rem;

        &>* {
            flex-basis: 100%;
        }
    }
`;

export const BorderCountries = styled.section`

    @media screen and (min-width: 768px) {
        display: flex;
        gap: 1rem;
    }

    h3 {
        margin-bottom: 1rem;
        white-space: nowrap;

        @media screen and (min-width: 768px) {
            align-self: flex-start;
            padding-top: 3px;
            margin: 0;
        }
    }
`;

export const BorderCardWrapper = styled.div`
    ${Flex}
`;