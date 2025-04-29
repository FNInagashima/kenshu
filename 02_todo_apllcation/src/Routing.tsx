import React from 'react';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import BootStrap from './BootStrap';

function Routing() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path='/'>
        <BootStrap />
        
        </Route>
        
        <Route path='/tekitou2'>
        </Route>
            
        </Switch>
      </Router>
      </div>

  );
}

export default Routing;
