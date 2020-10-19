import React from 'react';
import {GeneratedSection, GeneratedSectionInfo, QrImage, SuccessQRText} from "./GeneratePage.elements";

export const GeneratedDiv = () => {
    const url = `https://api.qrserver.com/v1/create-qr-code/?data=www.loremipsum.io/&bgcolor=FFFFFF&format=svg&qzone=8&margin=5&size=200x200`;
    return (
        <GeneratedSection>
            <GeneratedSectionInfo>
                {/*<QrImage url={'url'}/>*/}
                <SuccessQRText>
                    Use QR Options In Right Side &rarr;
                    {/*Qr Generated Successfully*/}
                </SuccessQRText>
            </GeneratedSectionInfo>
        </GeneratedSection>
    );
};
