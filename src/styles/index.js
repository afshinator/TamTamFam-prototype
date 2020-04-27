import React from "react";
import styled from "styled-components"
// import tw from "tailwind.macro"
import tw from 'twin.macro'

const Button = tw.button`text-lg bg-gray-300 px-8 py-2 rounded`;
export const SuccessButton = () => <Button>Success</Button>;

export const StyledForm = styled.main.attrs({
  className: "flex flex-col justify-center items-center bg-gray-100",
})`
  & {
    form {
      ${tw`bg-white text-center rounded py-8 px-5 shadow max-w-xs`}
    }
    input {
      ${tw`border-gray-300 mb-4 w-full border-solid border rounded py-2 px-4`}
    }
    button {
      ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
    }
  }
`
