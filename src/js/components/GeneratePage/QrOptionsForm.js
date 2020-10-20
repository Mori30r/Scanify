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
    const [text, setText] = useState('');
    const [color, setColor] = useState('ffffff');
    const [hex, setHex] = useState('');
    const [selectOrHex, setSelectOrHex] = useState('select');


    const handleSubmitForm = (e) => {
        e.preventDefault();
        imageDispatch({ type: 'SET_IMAGE', color: color.value, text, hex });
        e.target.reset()
        clearInputs();
        loadingDispatch({ type: 'LOADING' });
        setTimeout(()=>{
            loadingDispatch({ type: 'ON' })
        }, 1500);
    }
    const changeRadio = (e) => {
        setSelectOrHex(e.target.value);
    }

    const clearInputs = ()=>{
        setText('');
        setHex('ffffff');
        setColor('');
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <TextInputDiv>
                <InputLabel htmlFor="textInput">Enter Your Text:</InputLabel>
                <Input onChange={(e)=> setText(e.target.value)} required={true} id="textInput" placeholder="Your Text..." />
            </TextInputDiv>
            <PickColorDiv>
                <SelectColorDiv>
                    <TextInputDiv>
                        <InputLabel htmlFor="select"><input type='radio' name='colorRadio' checked={selectOrHex === 'select'} onChange={changeRadio} value="select" defaultChecked={true} required={true} /> Color:</InputLabel>
                        <Select
                            required={true}
                            value={color}
                            isDisabled={selectOrHex === 'hex' && true}
                            id="select"
                            options={options}
                            onChange={(selected)=> setColor(selected)}
                        />
                    </TextInputDiv>
                </SelectColorDiv>
                <OrText>Or</OrText>
                <TextInputDiv>
                    <InputLabel htmlFor="textInput"><input type='radio' name='colorRadio' checked={selectOrHex === 'hex'} onChange={changeRadio} value="hex" /> Hex:</InputLabel>
                    <Input disabled={selectOrHex === 'select' && true} onChange={(e)=> setHex(e.target.value)} padding={1.1} placeholder="(ex: FFFFFF)" maxLength={6} minLength={6}/>
                </TextInputDiv>
            </PickColorDiv>
            <SubmitButtonDiv>
                <Button>Generate</Button>
            </SubmitButtonDiv>
        </form>
    );
};
