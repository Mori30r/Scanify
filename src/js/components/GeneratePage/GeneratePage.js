import React, {useEffect, useState} from "react";
import {Button} from '../../styles/GlobalStyles';
import {
    Generate, GeneratedSection, QrImage,
    GeneratedSectionInfo, QrOptions, SuccessQRText,
    QrOptionsSection, QrOptionsSectionHeading,
    Input, PickColorDiv, SelectColorDiv,
    OrText, TextInputDiv, InputLabel,
} from "./GeneratePage.elements";
import Select from "react-select";


export const GeneratePage = () => {
    const options = [
        { value: '#ff7474', label: '🔴 Red' },
        { value: '#ffd187', label: '🟡 Yellow' },
        { value: '#a0ff8d', label: '🟢 Green' },
        { value: '#e873ff', label: '🟣 Purple' },
        { value: '#73a6ff', label: '🔵 Blue' },
        { value: '#ffffff', label: '⚪ white' },
    ];

    const url = `https://api.qrserver.com/v1/create-qr-code/?data=www.loremipsum.io/&bgcolor=FFFFFF&format=svg&qzone=8&margin=5&size=200x200`;
    const [data, setData] = useState(undefined);
    const [backgroundColor, setBackgroundColor] = useState(undefined);
    const [selectedOption, setSelectedOption] = useState('');


    useEffect(() => {
        return console.log(selectedOption)
    }, [selectedOption]);


    return (
        <Generate>
            <GeneratedSection>
                <GeneratedSectionInfo>
                    <QrImage url={'url'}/>
                        <SuccessQRText>
                            Generated QR Code With: <br/>
                            www.loremipsum.io/
                        </SuccessQRText>
                </GeneratedSectionInfo>
            </GeneratedSection>
            <QrOptions>
                <QrOptionsSection>
                    <QrOptionsSectionHeading>QR Code Options</QrOptionsSectionHeading>
                    <TextInputDiv>
                        <InputLabel htmlFor="textInput">Enter Your Text:</InputLabel>
                        <Input id="textInput" placeholder="Your Text..." />
                    </TextInputDiv>
                    <PickColorDiv>
                        <SelectColorDiv>
                            <TextInputDiv>
                                <InputLabel htmlFor="select">Background Color:</InputLabel>
                                <Select
                                    id="select"
                                    options={options}
                                    value={selectedOption}
                                    onChange={(selected)=> setSelectedOption(selected)}
                                />
                            </TextInputDiv>
                        </SelectColorDiv>
                        <OrText>Or</OrText>
                        <TextInputDiv>
                            <InputLabel htmlFor="textInput">Hex Color Code:</InputLabel>
                            <Input padding={1.1} placeholder="Hex Code (ex: #FFFFFF)" maxLength={7}/>
                        </TextInputDiv>
                    </PickColorDiv>
                    <Button>Generate</Button>
                </QrOptionsSection>
            </QrOptions>
        </Generate>
    )
}
