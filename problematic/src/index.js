import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import { createStore, applyMiddleware } from 'redux'
import reducer from './Redux/Reducers/reducer.js'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

let storeObject = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
    <Provider store={storeObject}>
    <App />
    </Provider> ,document.getElementById('root'));
