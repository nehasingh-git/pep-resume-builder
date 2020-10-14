import React from 'react';
import logo from './logo.svg';
import './static/scss/app.scss';
import Header from'./components/presentation/header';
import Footer from  './components/presentation/footer'
import Lp from'./components/presentation/landingPage'
import { Route,  Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
            <Route path="/" component={Lp}></Route>
            <Footer></Footer>
        </Switch>

    
    </div>
  );
}

export default App;
