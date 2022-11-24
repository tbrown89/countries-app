import styled, { css } from "styled-components";

export const CardStyles = styled.div`
    width: 264px;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.componentBg};
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);

    ${props => props.border && css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .75rem;
        padding: 0 1rem;
        width: 96px;
        height: 28px;

        @media screen and (min-width: 768px) {
            font-size: .875rem;
        }
    `}

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