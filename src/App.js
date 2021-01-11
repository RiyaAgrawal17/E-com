import React, { Fragment,useState } from "react";
import './css/App.css';
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import Order from './components/Order';
import Setting from './components/Setting';
import Profile from './components/Profile';
import Backend from './components/Backend';
import Add from './components/Add';


function App() {
  const [refresh,setRefresh]=useState(0);
  const updateRefresh=()=>{
setRefresh(refresh===0?1:0);
  }
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
          <Fragment>
          <Route path="/"  component={()=><Home fun ={updateRefresh} />} exact />
            <Route exact path = '/Profile' component = {Profile} />
            <Route path="/Cart"  component={()=><Cart fun ={updateRefresh} />}exact />
            <Route exact path = '/Order' component = {Order} />
            <Route exact path = '/Setting' component = {Setting} />
            <Route exact path = '/Backend' component = {Backend} />
            <Route exact path = '/Backend/:Add' component = {Add} />
          </Fragment>
        </Switch>
      </div>
    </Router>
  );
}

export default App;