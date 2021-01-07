import React, { Fragment } from "react";
import './css/App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import Order from './components/Order';
import Setting from './components/Setting';
import Profile from './components/Profile';
import Backend from './components/Backend';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
          <Fragment>
          <Route exact path = '/' component = {Home} />
            <Route exact path = '/Profile' component = {Profile} />
            <Route exact path = '/Cart' component = {Cart} />
            <Route exact path = '/Order' component = {Order} />
            <Route exact path = '/Setting' component = {Setting} />
            <Route exact path = '/Backend' component = {Backend} />
          </Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default App;