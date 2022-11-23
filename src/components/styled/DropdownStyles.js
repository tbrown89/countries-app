import styled from "styled-components";

export const DropdownStyles = styled.select`
    max-width: 200px;
    height: 48px;
    padding: 0 1.5rem;
    margin-bottom: 2rem;
    outline: none;
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.componentBg};
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.05);

    @media screen and (min-width: 768px) {
        margin: 0;
    }
`;