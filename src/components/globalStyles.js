import { createGlobalStyle } from "styled-components"
import andika from "../assets/fonts/Andika-Regular.ttf"
import openSans from "../assets/fonts/OpenSans-Regular.ttf"
import openSansSBI from "../assets/fonts/OpenSans-SemiBoldItalic.ttf"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Andika-Regular";
    src: url(${andika});
  }
  @font-face {
    font-family: "OpenSans-Regular";
    src: url(${openSans});
  }
  @font-face {
    font-family: "OpenSans-SemiBoldItalic";
    src: url(${openSansSBI});
  }
  h1, h2, h3 {
    /* font-family: "OpenSans-SemiBoldItalic"; */
    font-family: "Andika-Regular";
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "OpenSans-Regular";
    transition: all 0.50s linear;
  }
  nav {
    background: ${({ theme }) => theme.nav};
  }
  .appCard {
    background: ${({ theme }) => theme.cardBkgd};
    color: ${({ theme }) => theme.text};
  }
  .appCard input {
    background: ${({ theme }) => theme.cardInput};
    color: ${({ theme }) => theme.inputTxt};
  }
  .appCard input:focus {
    outline: none;
  }
  `
