import styled, { css } from "styled-components";

export const Status = styled.p`
    font-size: 1rem;
    margin: 1.5rem 0;
    ${props => props.error && css`
        span {
            display: block;
            font-size: 1.5rem;
            font-weight: 800;
            color: #F00;
        }
    `}
`;