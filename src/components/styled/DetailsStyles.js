import styled from "styled-components";

export const DetailsStyles = styled.section`
    margin: 2.5rem 0;

    @media screen and (min-width: 768px) {
        margin: 5rem 0;
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
`;