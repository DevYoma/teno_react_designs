import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AnitquePage from './ANITQUE/pages/AnitquePage';

function App() {
  return (
    <div className="app">

      <div className="app__body">
        <Router>
          <Switch>
              <Route  path="/antique" exact>
                <AnitquePage />
              </Route>
             
              <Route path="/">
                <h1>Welcome to this page</h1>
              </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
