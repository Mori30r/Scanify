import React, { useState, useEffect } from "react";
import styled from 'styled-components';


const Generate = styled.div`
height: 80vh;
padding: 2rem;
display: flex;
justify-content: space-around;
`;

const GeneratedSection = styled.div`
background-color: ${props => props.theme["primaryColorLight"]};
border-radius: 3rem;
flex: 0 0 60%;
display: flex;
justify-content: center;
align-items: center;
`;

const GeneratedSectionInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const QrImage = styled.img.attrs(props=>({
    src: props.url
}))`
background-size: cover;
width: 30rem;
height: 30rem;
border-radius: 3rem;
`;

const SuccessQrText = styled.p`
padding-top: 3rem;
text-align: center;
font-size: 2rem;
line-height: 3rem;
font-weight: 600;
color: ${ props => props.theme["darkText"] };
`;

const QrOptions = styled.div`
border-radius: 3rem;
background-color: ${props => props.theme["primaryColorLight"]};
flex: 1;
margin-left: 3rem;
`;



export const GeneratePage = () => {
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&bgcolor=FFFFFF&format=svg&qzone=8&margin=5&size=200x200`;
    const [data, setData] = useState(undefined);
    const [color, setColor] = useState(undefined);
    const [backgroundColor, setBackgroundColor] = useState(undefined);
    return (
        <Generate>
            <GeneratedSection>
                <GeneratedSectionInfo>
                    <QrImage url={url}/>
                        <SuccessQrText>
                            Generated QR Code With: <br/>
                            www.loremipsum.io/
                        </SuccessQrText>
                </GeneratedSectionInfo>
            </GeneratedSection>
            <QrOptions>
                QR Option
            </QrOptions>
        </Generate>
    )
}