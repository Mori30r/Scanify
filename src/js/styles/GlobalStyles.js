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
box-shadow: 0 0 2rem rgba(255, 116, 241, .6);
background-color: ${props => props.theme["secondaryColor"]};
color: ${props => props.theme["lightText"]};
border: none;
font-weight: bold;
width: 50%;
transition: all .3s;
backface-visibility: hidden;
outline: none;

&:hover{
transform: translateY(-.5rem);
-webkit-transform: translateY(-.5rem);
-moz-transform: translateY(-.5rem) rotate(0.02deg);
}

&:active{
transform: translateY(.2rem);
-webkit-transform: translateY(.2rem);
-moz-transform: translateY(.2rem) rotate(0.02deg);
box-shadow: 0 0 3rem rgba(255, 116, 241, .8);
}
`;

export const ParentDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
height: 100vh;
padding: 1rem;
`;


export const iconStyle = {
    width: '2.5rem',
    height: '2.5rem',
}


export const socialIconStyle = {
    width: '12rem',
    height: '12rem',
    outline: 'none'
}