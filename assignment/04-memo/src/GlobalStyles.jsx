import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* css 초기화 */
* {
  margin: 0;
  padding: 0;
  font: inherit;
  color: inherit;
}

*,
:after,
:before {
  box-sizing: border-box;
}

:root {
  -webkit-tap-highlight-color: transparent;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  cursor: default;
  line-height: 1.15;
  overflow-wrap: break-word;

  --text-grey: #808080;
  --text-black: #121212;

  --border-grey: #e6e6e6;
}


html,
body {
  width: 100%;
  height: 100vh;
  line-height: 1.5;
  font-size: 62.5%;
}

html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}


#root {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button {
  background: none;
  border: 0;
  cursor: pointer;
}

a {
  text-decoration: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ol,
ul, 
li {
  list-style: none;
}
`;

export default GlobalStyles;
