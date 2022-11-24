import styled from "styled-components";

export const IndexStyles = styled.main`
    margin: 1.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        margin: 3rem 0;
    }
`;

export const InputField = styled.section`
    
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3rem;

        &>* {
            flex-grow: 1;
        }
    }
`;

export const Countries = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    gap: 2.5rem;

    @media screen and (min-width: 768px) {
        gap: 74px;
    }
`;