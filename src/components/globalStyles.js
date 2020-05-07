import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `

// TODO: 
  //   @font-face {
//     font-family: "Allerta-Regular";
//     src: url(${Allerta});
//   }
//   body {
//     /* font-family: "Allerta-Regular"; */
//   }