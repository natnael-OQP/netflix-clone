import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        outline: none;
        border: none;
        box-sizing: border-box;
    }
    html,body{
        overflow-x: hidden;
        
    }
`;

export default GlobalStyle