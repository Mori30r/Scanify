import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {GeneratePage} from "../components/GeneratePage/GeneratePage";
import { BottomNavigationBar } from "../components/BottomNavigationBar/BottomNavigationBar";
import {ParentDiv} from "../styles/GlobalStyles";




export default () => {
    return (
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
    )
}
