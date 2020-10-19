import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
// import Contact from './components/presentation/contact';
import LandingPage from './components/presentation/landingPage';
import Header from './components/presentation/header';
import { Route } from 'react-router-dom';

function App() {
  return (

    <div>
     <Header></Header>
      <Route path='/' component={LandingPage}></Route>
    </div>
   
  );
}

export default App;
