import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // Scroll Bar
    *::-webkit-scrollbar {
    width: 10px;
    }

    *::-webkit-scrollbar-track {
    background: transparent;
    }

    *::-webkit-scrollbar-thumb {
    background-color: rgba(155, 155, 155, 0.5);
    border-radius: 20px;
    border: transparent;
    }

    body{
        background: black;
        color: white;   
    }

    a{
        text-decoration: none;
        color: #333;
        &:hover{
            cursor: pointer;
        }
    }

    h1,h2,h3,h4,p, ul,span, button{
        color: white;
        font-family: 'Stylish', sans-serif;
    }

    button{
        //background: transparent;
        border: none;
        outline: none;
    }
`;

export default GlobalStyle;
