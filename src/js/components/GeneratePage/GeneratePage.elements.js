import styled, {css} from "styled-components";
import {device} from "../../styles/responsive";

export const Generate = styled.div`
height: 80vh;
padding: 0 2rem;
display: flex;
justify-content: space-around;
@media ${device.laptop}{
padding: 0 .5rem;
}
@media ${device.mobileL}{
flex-direction: column-reverse;
justify-content: space-evenly;
padding: 1rem 6rem;
width: 100%;
height: 100rem;
}
@media ${device.laptop}{
padding: 0 .5rem;
}
`;

export const Section = styled.div`
background-color: ${props => props.theme["primaryColorLight"]};
border-radius: 3rem;
display: flex;
flex: ${ props => props.large ? '1' : '0 0 50%' };
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const GeneratedSectionInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const QrImage = styled.img.attrs(props=>({
    src: props.url
}))`
background-size: cover;
width: 30rem;
height: 30rem;
border-radius: 3rem;
@media ${device.laptopL}{
width: 25rem;
height: 25rem;
}

`;

export const SuccessQRText = styled.div`
padding-top: 3rem;
text-align: center;
font-size: 2rem;
line-height: 3rem;
font-weight: 600;
color: ${ props => props.theme["darkText"] };
text-decoration: none;
`;

export const QrOptions = styled.div`
border-radius: 3rem;
background-color: ${props => props.theme["primaryColorLight"]};
flex: 1;
margin-left: 3rem;
transition: all .3s;
backface-visibility: hidden;
&:hover{
box-shadow: 0 1rem 2rem rgba(0, 0, 0, .3);
transform: scale(1.01);
}
@media ${device.mobileL}{
margin: 0;
flex: 0;
padding: 2rem;
}
`;
export const QrOptionsSection = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 0 2rem;
@media ${device.mobileL}{
padding: 1rem 2rem;
}
`;
export const Heading = styled.div`
text-align: center;
font-size: 2rem;
color: ${ props => props.theme["darkText"]};
background-color: ${ props => props.notBorder ? 'none' : props.theme["lightText"]  };
font-weight: 600;
border-radius: 3rem;
padding: 2rem;
width: 60%;
margin: 0 auto;
transition: all .1s;
backface-visibility: hidden;
${ props => props.Animated && css`
&:hover{
transform: rotate(-2deg);
box-shadow: 0 0 2rem rgba(57, 57, 57, .2);
}
@media ${device.laptopL}{
font-size: 1.5rem;
}
@media ${device.mobileL}{
padding: 3rem 0;
}
@media ${device.mobileSS}{
padding: 1rem .5rem;
font-size: 1.2rem;
}
`}

`;
export const Input = styled.input`
width: 100%;
outline: none;
text-align: center;
font-family: 'Open Sans',sans-serif;
font-size: 1.2rem;
background-color: ${props => props.theme["lightText"]};
color: ${props => props.theme["darkText"]};
border:none;
border-radius: 2rem;
transition: all .2s;
padding: ${(props) => {
    if (props.padding) {
        return `${props.padding}rem`;
    } else {
        return `2rem`;
    }
}};
@media ${device.mobileSS}{
padding: ${(props) => {
    if (props.padding) {
        return `${props.padding - .5}rem`;
    } else {
        return `1rem`;
    }
}
}
}
::placeholder,
::-webkit-input-placeholder {
color: ${props => props.theme["thinText"]};
}
:-ms-input-placeholder {
color: ${props => props.theme["thinText"]};
}
&:focus{
transform: scale(.9);
}
&:disabled{
background-color: #F2F2F2;
}
`;
export const PickColorDiv = styled.div`
display: flex;
align-items: end;
padding: 0 1rem;
@media ${device.mobileSS}{
padding: 0;
}
`;
export const SelectColorDiv = styled.div`
flex: 1;
@media ${device.mobileSS}{
flex: 0 0 50%;
}
`;
export const OrText = styled.div`
display: flex;
align-self: flex-end;
font-size: 2rem;
padding: 0 2rem;
text-align: center;
font-weight: 1000;
color: ${ props => props.theme["darkText"]};
@media ${device.desktop}{
padding: 0 1.5rem;
font-size: 1.5rem;
}
@media ${device.mobileSS}{
padding: 0 1rem;
font-size: 1rem;
}
`;
export const TextInputDiv = styled.div`
display: flex;
flex: 0 0 50%;
flex-direction: column;
justify-content: space-evenly;
@media ${device.laptopL}{
flex: 1 0 0;
}
@media ${device.mobileSS}{
flex : 1 0 0;
}
`;
export const InputLabel = styled.label`
font-size: 1.2rem;
font-weight: 600;
color:${ props => props.theme["darkText"]};
padding: 2.5rem 0 1rem 0;
@media ${device.mobileSS}{
font-size: 1rem;
}
`;
export const SubmitButtonDiv = styled.div`
display: flex;
justify-content: center;
padding-top: 4rem;
`;