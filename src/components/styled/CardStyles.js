import styled from "styled-components";

export const CardStyles = styled.div`
    width: 264px;
    border-radius: 5px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.componentBg};
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);

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
        font-weight: 600;
        margin-bottom: .5rem;

        span {
            font-weight: 300;
        }
    }
`;

export const CardContent = styled.div`
    padding: 1.5rem;
`;