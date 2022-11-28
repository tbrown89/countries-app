import styled from "styled-components";
import { Flex } from '../styled/Mixins';

const BaseCard = styled.div`
    border-radius: 5px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.componentBg};
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
`;

export const CountryCard = styled(BaseCard)`
    width: 264px;
    height: 100%;

    img {
        width: 100%;
        aspect-ratio: 5 / 3;
        object-fit: cover;
    }

    h2 {
        font-size: 1.125rem;
        margin-bottom: 1rem;
    }

    li {
        margin-bottom: .5rem;
    }
`;

export const CardContent = styled.div`
    padding: 1.5rem;
`;

export const BorderCard = styled(BaseCard)`
    ${Flex};
    padding: 0 1rem;
    min-width: 96px;
    height: 28px;
`;