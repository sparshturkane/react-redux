import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";

//imported big store from redux
import {createStore} from 'redux';

//importing collecton of all the different stores
import allReducers from './reducers/index';

//importing App from components App
import App from './components/App';

//storage ---> sending data to react is done through Provider
import {Provider} from 'react-redux';


const store = createStore(allReducers);//storing that store in constant so we don't change it accidently

//store is a big chunk of date json store
ReactDOM.render(
    <Provider store={store}>
     <App/>
    </Provider>,
    document.getElementById('root')
);
