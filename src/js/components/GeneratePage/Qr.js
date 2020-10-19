import React from 'react';
import {QrOptions, QrOptionsSection, QrOptionsSectionHeading} from "./GeneratePage.elements";
import {QrOptionsForm} from "./QrOptionsForm";

export const Qr = () => {
    return (
        <QrOptions>
            <QrOptionsSection>
                <QrOptionsSectionHeading>QR Code Options</QrOptionsSectionHeading>
                <QrOptionsForm/>
            </QrOptionsSection>
        </QrOptions>
    );
};
