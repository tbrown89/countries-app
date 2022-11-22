import styled, { css } from "styled-components";

const BtnBase = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito Sans', sans-serif;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};

    &:hover {
        cursor: pointer;
    }

    svg {
        margin-right: .5rem;
    }
`;

export const Button = styled(BtnBase)`
    // BUTTON PRIMARY
    ${props => props.primary && css`
        font-size: .875rem; // 14px
        font-weight: 300;
        width: 6.5rem;
        height: 2rem;
        border-radius: 2px;
        background-color: ${({ theme }) => theme.componentBg};
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);

        @media screen and (min-width: 768px) {
            font-size: 1rem; // 16px
            width: 8.5rem;
            height: 2.5rem;
            border-radius: 6px;
        }
    `}

    ${props => props.ghost && css`
        font-size: .75rem; // 12px
        font-weight: 600;
        background-color: transparent;

        @media screen and (min-width: 768px) {
            font-size: 1rem;
        }
    `}
`;