import React from 'react';
import { ReactComponent as ReloadIcon } from "../../../assets/icons/reload.svg";

import {GeneratedSection, GeneratedSectionInfo, QrImage, SuccessQRText} from "./GeneratePage.elements";
import styled, {keyframes} from "styled-components";




const InfiniteRotate = keyframes`
  0% {
   transform: rotate(0); 
   }
  100% {
   transform: rotate(-360deg); 
   }
`;

const IconWrapper = styled.div`
  svg {
    fill: ${ props => props.theme["secondaryColor"] };
    width: 4rem;
    height: 4rem;
    animation: 1s ${InfiniteRotate} infinite ease-in-out;
  }
`;



export const GeneratedDiv = () => {
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=www.loremipsum.io/&bgcolor=FFFFFF&format=svg&qzone=8&margin=5&size=200x200`;
    return (
        <GeneratedSection>
            <GeneratedSectionInfo>
                {/*<QrImage url={'url'}/>*/}
                <SuccessQRText>
                    <IconWrapper>
                        <ReloadIcon/>
                    </IconWrapper>
                    {/*Use QR Options In Right Side &rarr;*/}
                    {/*Qr Generated Successfully*/}
                </SuccessQRText>
            </GeneratedSectionInfo>
        </GeneratedSection>
    );
};
