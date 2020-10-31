import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider as ReduxProvider } from "react-redux";
import {createStore, applyMiddleware} from React;
import rootReducer from './reducers/rootRedocer';
const store =createStore(initialState)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);