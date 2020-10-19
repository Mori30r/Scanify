import React from "react";
import { Generate } from "./GeneratePage.elements";
import {Qr} from "./Qr";
import {GeneratedDiv} from "./GeneratedDiv";
export const GeneratePage = () => {
    return (
        <Generate>
            <GeneratedDiv/>
            <Qr/>
        </Generate>
    );
}
