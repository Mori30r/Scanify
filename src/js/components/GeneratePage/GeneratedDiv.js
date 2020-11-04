import React, {useContext} from 'react';
import { ReactComponent as ReloadIcon } from "../../../assets/icons/reload.svg";

import {Section, GeneratedSectionInfo, QrImage, SuccessQRText} from "./GeneratePage.elements";
import styled, {keyframes} from "styled-components";
import {LoadingContext} from "../../context/LoadingContext";
import {ImageContext} from "../../context/ImageContext";




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
    const { loading  } = useContext(LoadingContext);
    const { image, imageDispatch  } = useContext(ImageContext);
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${image.text}&bgcolor=${ image.hexOrSelect === 'hex' ? image.hex : image.color  }&format=svg&qzone=8&margin=5&size=200x200`;

    const handleRenderPage = () => {
        if ( loading === 'off'){
            return (
                <SuccessQRText>
                    Use QR Options In Right Side &rarr;
                </SuccessQRText>
            );
        } if (loading === 'loading'){
            return (
                <SuccessQRText>
                    { loading && <IconWrapper><ReloadIcon/></IconWrapper>}
                </SuccessQRText>
            );
        } if ( loading === 'on'){
            return (
                <>
                    <QrImage url={url}/>
                    <SuccessQRText>
                        Qr Generated Successfully
                    </SuccessQRText>
                    <SuccessQRText>
                        <a href={url} download={true}>
                            Download Image
                        </a>
                    </SuccessQRText>
                </>
            )
        }
    }

    return (
        <Section>
            <GeneratedSectionInfo>
                {handleRenderPage()}
            </GeneratedSectionInfo>
        </Section>
    );
};
