import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from "./js/router/ReactRouter";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from './js/styles/GlobalStyles';
import * as theme from './js/styles/theme';
import { LoadingContext } from './js/context/LoadingContext';



ReactDOM.render(
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <ReactRouter/>
        </ThemeProvider>,
  document.getElementById('root')
);