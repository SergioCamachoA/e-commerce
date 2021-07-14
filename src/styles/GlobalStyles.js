import { createGlobalStyle } from "styled-components"
import chillFont from "../font/Chillax-Regular.otf"
import chillBoldFont from "../font/Chillax-Semibold.otf"

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'chillbold';
    src: url(${chillBoldFont});
}
@font-face {
  font-family: 'chill';
  src: url(${chillFont});
}
:root {
    --one: #232946;
    --two: #121629;
    --three: #8860D0;
    --four: #5AB9EA;
    --five: #d4d8f0;
    --bg: #84CEEB;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  overflow: hidden;
}
html {
}
.App {
    background-color: var(--bg);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
div {
  font-family: 'chill';
  font-size: 2vw;
}
header {
  font-family: 'chillbold';
  font-size: 5vw;
}
a {
  text-decoration: none;
  &:hover {
    }
}

button,
input,
select {
  font-family: 'chill';
  background-color: var(--three);
  border-radius: 2rem;
  border: none;
  ::placeholder{
    color: var(--one);
  }
}
button:hover {
  cursor: pointer;
}
select{
  padding-left: 36%;
  /* transform: translateX(50%); */
}

`
