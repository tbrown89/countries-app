import styled from "styled-components";
import { Flex } from '../styled/Mixins';

export const IndexStyles = styled.main`
    margin: 1.5rem 0 2.5rem;

    @media screen and (min-width: 768px) {
        margin: 3rem 0;
    }
`;

export const InputField = styled.section`
    
    @media screen and (min-width: 768px) {
        margin-bottom: 3rem;
        ${Flex};

        &>* {
            flex-grow: 1;
        }
    }
`;

export const Countries = styled.section`
    ${Flex};

    @media screen and (min-width: 768px) {
        gap: 74px;
    }
`;