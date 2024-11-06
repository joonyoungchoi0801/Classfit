import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, 
  *::after, 
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    font-family: 'Pretendard', sans-serif;
    cursor: default;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
  }
  :root {
    --color-blue: #0056F6;
    --color-white: #FFFFFF;
    --color-black: #121212;
    --color-gray: #EDEDED;
    --color-skyblue: #E0EBFF;
    --color-lightblue: #F2F5FC;
  }

`;

export default GlobalStyles;
