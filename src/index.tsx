import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import dotenv from 'dotenv';
import './styles/main.scss'
dotenv.config()

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)