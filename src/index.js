//React
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

//Redux
import { Provider } from 'react-redux';
import store from './store/store';

// React Router

import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom'

// Styled Components

import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from "./styles/theme"
import { ThemeProvider } from 'styled-components';

//components
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <ThemeProvider theme={theme}>
            <GlobalStyle></GlobalStyle>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
