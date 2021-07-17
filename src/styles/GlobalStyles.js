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
    --one: #505050;
    --two: #292929;
    --three: #b4b4b4;
    --four: #cacaca;
    --five: #eeeeee;
    --bg: #e6e6e6;
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
    .planta {
    position: absolute;
    height: 47vw;
    z-index: 1;
  }
}
  .Main-in {
    background-color: var(--bg);
  }
div {
    position: relative;
  z-index: 2;
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
    color: var(--two);
  }
}
button:hover {
  cursor: pointer;
}
select{
  /* padding-left: 16%; */
  /* transform: translateX(50%); */
}

`
