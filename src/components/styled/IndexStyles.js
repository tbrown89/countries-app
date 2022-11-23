import styled from "styled-components";

export const IndexStyles = styled.main`

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
    margin-bottom: 2.5rem;

    @media screen and (min-width: 768px) {
        gap: 74px;
        margin-bottom: 4.5rem;
    }
`;