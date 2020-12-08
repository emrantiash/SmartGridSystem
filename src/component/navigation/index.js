import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Topology from '../../pages/topology/Topology';
import Energy from '../../pages/energy/Energy' ;
//import Login from '../../pages/login/Login'





const nav = () => (
  <Switch >
      <Route exact path="/" component={Home} />
      <Route  path="/topology" component={Topology} /> 
      <Route  path="/energy" component={Energy} /> 

  </Switch>
)

export default nav;