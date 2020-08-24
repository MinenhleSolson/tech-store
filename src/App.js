import React from 'react';
import './App.css';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {    
  return (
    <div>

    <Router>
    <div className='p-3'>
    <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/checkout">
        <Header />
          <Checkout />
        </Route>
      </Switch>
    </div>
       
    </Router>

    
  </div>
  );
}

export default App;
