import { createGlobalStyle } from "styled-components";
import background from "./currency-exchange-background-image.jpg";

export const GlobalStyle = createGlobalStyle`
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0 auto;
        font-family: 'Lato', sans-serif;
        background-image: url("${background}");
    }

    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }
`;
