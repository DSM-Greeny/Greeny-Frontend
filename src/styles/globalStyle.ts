import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        width: max-content;
        
        font-family: "Pretendard";
        font-weight: 300;
        line-height: 100%;
        
        box-sizing: border-box;
    }

    html, body {
        max-width: 100%;
        max-height: 100%;

        overflow: hidden;
    }

    img {
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        -webkit-user-select: none;
        user-select: none;
    }
`;

export default GlobalStyle;
