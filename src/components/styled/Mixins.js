import { css } from "styled-components";

export const Flex = css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${({ dir }) => dir || 'row'};
    justify-content: ${({ jc }) => jc};
    align-items: ${({ ai }) => ai};
    gap: ${({ gap }) => gap};
`;