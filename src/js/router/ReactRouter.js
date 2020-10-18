import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {GeneratePage} from "../components/GeneratePage";

export default () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path='/' component={GeneratePage} exact={true}/>
                </Switch>
        </BrowserRouter>
    )
}
