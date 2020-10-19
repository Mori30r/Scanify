import React, {useEffect, useState} from 'react';
import {
    Input,
    InputLabel,
    OrText,
    PickColorDiv,
    SelectColorDiv,
    SubmitButtonDiv,
    TextInputDiv
} from "./GeneratePage.elements";
import Select from "react-select";
import {Button} from "../../styles/GlobalStyles";

const options = [
    { value: 'ff7474', label: '🔴 Red' },
    { value: 'ffd187', label: '🟡 Yellow' },
    { value: 'a0ff8d', label: '🟢 Green' },
    { value: 'e873ff', label: '🟣 Purple' },
    { value: '73a6ff', label: '🔵 Blue' },
    { value: 'ffffff', label: '⚪ white' },
];


export const QrOptionsForm = () => {

    const [data, setData] = useState(undefined);
    const [backgroundColor, setBackgroundColor] = useState(undefined);
    const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        return console.log(selectedOption)
    }, [selectedOption]);

    return (
        <form>
            <TextInputDiv>
                <InputLabel htmlFor="textInput">Enter Your Text:</InputLabel>
                <Input required={true} id="textInput" placeholder="Your Text..." />
            </TextInputDiv>

            <PickColorDiv>
                <SelectColorDiv>
                    <TextInputDiv>
                        <InputLabel htmlFor="select">Color:</InputLabel>
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
                    <Input padding={1.1} placeholder="Hex Code (ex: FFFFFF)" maxLength={6} minLength={6}/>
                </TextInputDiv>
            </PickColorDiv>
            <SubmitButtonDiv>
                <Button>Generate</Button>
            </SubmitButtonDiv>
        </form>
    );
};
