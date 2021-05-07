import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, compose} from 'redux';

import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './components/App';
import dotenv from 'dotenv';
import {reducers}from './redux/reducers';
import {initialState} from './redux/store/index';
import './styles/main.scss';
dotenv.config()

export type RootStore = ReturnType<typeof reducers>;
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));



ReactDOM.render(
    <Provider store={store} >
         <App/>
    </Provider>
   ,
    document.querySelector('#root')
)