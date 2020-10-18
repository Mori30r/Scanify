import React from "react";
import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*::before,
*,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html{
  font-size:62.5% ;
}

body{
  background-color: ${props => props.theme["primaryColor"]};
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
}
`

export const Button = styled.button`
cursor: pointer;
font-size: 1.5rem;
align-self: center;
padding: 2rem;
border-radius: 3rem;
box-shadow: 0 0 4rem rgba(255, 116, 241, .6);
background-color: ${props => props.theme["secondaryColor"]};
color: ${props => props.theme["lightText"]};
border: none;
font-weight: bold;
width: 50%;
`;