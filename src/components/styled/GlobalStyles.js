import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    // RESET
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    // GLOBAL STYLES
    html { font-size: 100%; }

    body {
        font-family: 'Nunito Sans', sans-serif;
        color: ${({ theme }) => theme.text};
        background-color: ${({ theme }) => theme.bg};
        transition: background-color .5s ease-in-out;
    }

    h1,
    h2 { font-weight: 800; }

    h1 {
        font-size: .875rem; // 14px

        @media screen and (min-width: 768px) {
            font-size: 1.5rem;
        }
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.text};
    }
`;

// LIGHT & DARK THEME COLOR PALETTE
export const lightTheme = {
    bg: 'hsl(0, 0%, 95%);',
    componentBg: 'hsl(0, 0%, 100%)',
    text: 'hsl(200, 15%, 8%)',
    placeholder: 'hsl(0, 0%, 77%)'
};

export const darkTheme = {
    bg: 'hsl(207, 26%, 17%)',
    componentBg: 'hsl(209, 23%, 22%)',
    text: 'hsl(0, 0%, 100%)',
    placeholder: 'hsl(0, 0%, 100%)'
};