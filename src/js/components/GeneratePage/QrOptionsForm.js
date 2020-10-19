import React, {useContext, useState} from 'react';
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
import {LoadingContext} from "../../context/LoadingContext";
import {ImageContext} from "../../context/ImageContext";

const options = [
    { value: 'ff7474', label: '🔴 Red' },
    { value: 'ffd187', label: '🟡 Yellow' },
    { value: 'a0ff8d', label: '🟢 Green' },
    { value: 'e873ff', label: '🟣 Purple' },
    { value: '73a6ff', label: '🔵 Blue' },
    { value: 'ffffff', label: '⚪ white' },
];


export const QrOptionsForm = () => {

    const { loadingDispatch  } = useContext(LoadingContext);
    const { image, imageDispatch  } = useContext(ImageContext);


    const handleSubmitForm = (e) => {
        e.preventDefault();
        loadingDispatch({ type: 'LOADING' })
        setTimeout(()=>{
            loadingDispatch({ type: 'ON' })
        }, 2000);
    }


    return (
        <form onSubmit={handleSubmitForm}>
            <TextInputDiv>
                <InputLabel htmlFor="textInput">Enter Your Text:</InputLabel>
                <Input onChange={(e)=> imageDispatch({ type: 'SET_TEXT', text: e.target.value })} required={true} id="textInput" placeholder="Your Text..." />
            </TextInputDiv>
            <PickColorDiv>
                <SelectColorDiv>
                    <TextInputDiv>
                        <InputLabel htmlFor="select">Color:</InputLabel>
                        <Select
                            id="select"
                            options={options}
                            onChange={(selected)=> imageDispatch({type: 'SET_COLOR', color: selected.value})}
                        />
                    </TextInputDiv>
                </SelectColorDiv>
                <OrText>Or</OrText>
                <TextInputDiv>
                    <InputLabel htmlFor="textInput">Hex Color Code:</InputLabel>
                    <Input onChange={(e)=> imageDispatch({ type: 'SET_HEX', hex: e.target.value })} padding={1.1} placeholder="Hex Code (ex: FFFFFF)" maxLength={6} minLength={6}/>
                </TextInputDiv>
            </PickColorDiv>
            <SubmitButtonDiv>
                <Button>Generate</Button>
            </SubmitButtonDiv>
        </form>
    );
};
