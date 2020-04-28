import React from "react";
import styled from "styled-components"
// import tw from "tailwind.macro"
import tw from 'twin.macro'

export const COLORS = {
  "TITLE_YELLOW" : "#f4d03f",
  
}

export const Btn = tw.button`text-lg bg-gray-300 px-8 py-2 rounded`;
export const Button = (kids) => <Btn {...kids}>{kids.children}</Btn>
export const SuccessButton = () => <Btn>Success</Btn>;

/*
export const FullPageContainer = styled.main`
  height: 100vh;
  background:url(${img}) no-repeat center center fixed;
  background-size: cover;
  overflow: hidden;
`
*/

export const StyledForm = styled.main.attrs({
  className: "flex flex-col justify-center items-center bg-gray-100",
})`
  & {
    form {
      ${tw`max-w-xs px-5 py-8 text-center bg-white rounded shadow`}
    }
    input {
      ${tw`w-full px-4 py-2 mb-4 border border-gray-300 border-solid rounded`}
    }
    button {
      ${tw`px-4 py-2 font-bold text-white bg-green-500 border border-blue-700 rounded hover:bg-green-700`}
    }
  }
`
