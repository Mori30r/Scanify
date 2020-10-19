import React, {useReducer} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {GeneratePage} from "../components/GeneratePage/GeneratePage";
import { BottomNavigationBar } from "../components/BottomNavigationBar/BottomNavigationBar";
import {ParentDiv} from "../styles/GlobalStyles";
import {loadingReducer} from "../reducers/loadingReducer";
import { LoadingContext } from "../context/LoadingContext";


export default () => {
    const [loading, loadingDispatch] = useReducer(loadingReducer, 'off', undefined);

    return (
        <LoadingContext.Provider value={{ loading, loadingDispatch }}>
            <BrowserRouter>
                <ParentDiv>
                    <Switch>
                        <Route path='/' component={GeneratePage} exact={true}/>
                        <Route path='/info' component={GeneratePage}/>
                        <Route path='/scan' component={GeneratePage}/>
                    </Switch>
                    <BottomNavigationBar/>
                </ParentDiv>
            </BrowserRouter>
        </LoadingContext.Provider>
    )
}
