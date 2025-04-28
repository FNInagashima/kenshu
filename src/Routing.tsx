import React from 'react';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import App from './App';
import BootStrap from './BootStrap';

function Routing() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path='/tekitou'>
            <App />
            </Route>
            <Route path='/tekitou2'>
            <BootStrap />
            </Route>
            
        </Switch>
      </Router>
      </div>

  );
}

export default Routing;
