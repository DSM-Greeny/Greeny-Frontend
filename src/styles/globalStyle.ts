import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        width: max-content;
        
        font-family: "Pretendard";
        font-weight: 300;
        line-height: 150%;
        text-align: start;
        
        box-sizing: border-box;
        
        -webkit-user-drag: none;
        -moz-user-drag: none;
        -ms-user-drag: none;
        -webkit-user-select: none;
        user-select: none;
    }

    html, body {
        background-color: ${({ theme }) => theme.colors.background1};

        max-width: 100%; 

        overflow: hidden;
        overflow-y: auto;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    button, input {
        background-color: transparent;

        border: none;
    }

    ul {
        list-style-type: none;
    }

    h1 {
        color: ${({ theme }) => theme.colors.background6};
        font-size: ${({ theme }) => theme.fontSizes.title};
        font-weight: 800;
    }

    h2 {
        color: ${({ theme }) => theme.colors.background6};
        font-size: ${({ theme }) => theme.fontSizes.subTitle};
        font-weight: 700;
    }

    h3 {
        color: ${({ theme }) => theme.colors.background6};
        font-size: ${({ theme }) => theme.fontSizes.text};
        font-weight: 600;
    }

    p {
        color: ${({ theme }) => theme.colors.background6};
        font-size: ${({ theme }) => theme.fontSizes.subText};
        font-weight: 400;
    }

    span {
        color: ${({ theme }) => theme.colors.background5};
        font-size: ${({ theme }) => theme.fontSizes.description};
        font-weight: 400;
    }

    img {
        border-radius: 4px;
        object-fit: contain;
    }

    picture {
        display: flex;
    }
`;

export default GlobalStyle;
