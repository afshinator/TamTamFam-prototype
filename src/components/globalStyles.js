import { createGlobalStyle } from "styled-components"
import oxygen from "../assets/Oxygen-Regular.ttf"

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Oxygen-Regular";
    src: url(${oxygen});
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Oxygen-Regular";
    transition: all 0.50s linear;
  }
  .appCard {
    background: ${({ theme }) => theme.cardBkgd};
    color: ${({ theme }) => theme.cardTxt};
  }

  .appCard h3 {
    color: ${({ theme }) => theme.cardH3};
  }

  `
