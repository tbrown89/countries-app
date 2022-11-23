import styled from "styled-components";

export const SearchBarStyles = styled.input`
    font-size: .875rem;
    width: 100%;
    max-width: 480px;
    height: 48px;
    padding: 0 2rem;
    margin-bottom: 2.5rem;
    border: none;
    outline: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.componentBg};
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.05);

    &::placeholder {
        color: ${({ theme }) => theme.placeholder};
    }

    @media screen and (min-width: 768px) {
        margin: 0;
    }
`;