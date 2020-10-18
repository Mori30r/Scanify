import styled from "styled-components";

export const Generate = styled.div`
height: 80vh;
padding: 2rem;
display: flex;
justify-content: space-around;
`;

export const GeneratedSection = styled.div`
background-color: ${props => props.theme["primaryColorLight"]};
border-radius: 3rem;
flex: 0 0 60%;
display: flex;
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
`;

export const SuccessQRText = styled.p`
padding-top: 3rem;
text-align: center;
font-size: 2rem;
line-height: 3rem;
font-weight: 600;
color: ${ props => props.theme["darkText"] };
`;

export const QrOptions = styled.div`
border-radius: 3rem;
background-color: ${props => props.theme["primaryColorLight"]};
flex: 1;
margin-left: 3rem;
`;
export const QrOptionsSection = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 0 2rem;
`;
export const QrOptionsSectionHeading = styled.div`
text-align: center;
font-size: 2rem;
color: ${ props => props.theme["darkText"]};
background-color: ${ props => props.theme["lightText"]};
font-weight: 600;
border-radius: 3rem;
padding: 1rem 2rem;
width: 60%;
margin: 0 auto;
`;
export const Input = styled.input`
text-align: center;
font-family: 'Open Sans',sans-serif;
background-color: ${ props => props.theme["lightText"]};
color: ${ props => props.theme["darkText"]};
border:none;
border-radius: 2rem;
padding: ${(props)=>{
    if(props.padding){
        return `${props.padding}rem`;
    } else {
        return `2rem`;
    }
}};
::placeholder,
::-webkit-input-placeholder {
color: ${ props => props.theme["thinText"]};
}
:-ms-input-placeholder {
color: ${ props => props.theme["thinText"]};
}
`;
export const PickColorDiv = styled.div`
display: flex;
justify-content: space-around;
align-items: end;
padding: 0 2rem;
`;
export const SelectColorDiv = styled.div`
flex: 1;
`;
export const OrText = styled.div`
padding: 0 2rem;
text-align: center;
font-size: 2rem;
font-weight: 1000;
color: ${ props => props.theme["darkText"]};
`;
export const TextInputDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;
export const InputLabel = styled.label`
font-size: 1.25rem;
font-weight: 600;
color:${ props => props.theme["darkText"]};
padding: 0 0 1rem 0;

`;