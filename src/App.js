import React from 'react';
import logo from './logo.svg';
import './static/app.scss';
import Header from'./components/presentation/header'
import Lp from'./components/presentation/landingPage'
import { Route,  Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
                    
            <Route path="/" component={Lp}></Route>
        </Switch>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
