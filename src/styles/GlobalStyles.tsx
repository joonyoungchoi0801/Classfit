import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'PyeongChangPeace-Bold';
      src: url('/src/assets/font/PyeongChangPeace-Bold.ttf') format('ttf');
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
    font-family: 'PyeongChangPeace-Light';
    src: url('/src/assets/font/PyeongChangPeace-Light.ttf') format('ttf');
    font-weight: 400;
    font-style: normal;
  }
  
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
  font-family: 'Pretendard';
  cursor: default;
  overflow-x: auto;
  overflow-y: hidden;
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
  --color-lightgray: #CACACA;
  --color-red: #FF5858;
}

`;

export default GlobalStyles;
