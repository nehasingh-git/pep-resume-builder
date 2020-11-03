import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
const reduxStore = createStore(rootReducer)

ReactDOM.render(
  <Provider store={reduxStore}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);