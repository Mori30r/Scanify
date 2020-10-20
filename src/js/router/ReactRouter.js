import React, {useReducer} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {GeneratePage} from "../components/GeneratePage/GeneratePage";
import { BottomNavigationBar } from "../components/BottomNavigationBar/BottomNavigationBar";
import {ParentDiv} from "../styles/GlobalStyles";
import {loadingReducer} from "../reducers/loadingReducer";
import { LoadingContext } from "../context/LoadingContext";
import {imageReducer} from "../reducers/imageReducer";
import {ImageContext} from "../context/ImageContext";
import {InfoPage} from "../components/InfoPage/InfoPage";


export default () => {
    const [loading, loadingDispatch] = useReducer(loadingReducer, 'off', undefined);
    const [image, imageDispatch] = useReducer(imageReducer, { color: 'FFFFFF', text: 'Demo', hex: undefined }, undefined);

    return (
        <ImageContext.Provider value={{ image, imageDispatch }}>
            <LoadingContext.Provider value={{ loading, loadingDispatch}}>
                <BrowserRouter>
                    <ParentDiv>
                        <Switch>
                            <Route path='/' component={GeneratePage} exact={true}/>
                            <Route path='/info' component={InfoPage}/>
                        </Switch>
                        <BottomNavigationBar/>
                    </ParentDiv>
                </BrowserRouter>
            </LoadingContext.Provider>
        </ImageContext.Provider>
    )
}
