import React from 'react';
import {QrOptions, QrOptionsSection, Heading} from "./GeneratePage.elements";
import {QrOptionsForm} from "./QrOptionsForm";

export const Qr = () => {
    return (
        <QrOptions>
            <QrOptionsSection>
                <Heading Animated>QR Code Options</Heading>
                <QrOptionsForm/>
            </QrOptionsSection>
        </QrOptions>
    );
};
