import styled from "styled-components";

export const HeaderStyles = styled.header`
    display: flex;
    align-items: center;
    height: 5rem;
    background-color: ${({ theme }) => theme.componentBg};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

    // CONTAINER DIV
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;