import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AnitquePage from './ANITQUE/pages/AnitquePage';
import NatashaPage from './NATASHA/pages/NatashaPage'
// import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  return (
    <div className="app">

      <div className="app__body">
        <Router>
          <Switch>
              <Route  path="/antique" exact>
                <AnitquePage />
              </Route>

              <Route path='/natasha'>
                <NatashaPage />
              </Route>
            
              <Route path="/">
                <h1>Welcome to this page</h1>
                <Link to="/antique">Antique Page Design</Link>
                Built with Love 💖 by Yoma <br />
                <Link to="/natasha">Natasha Page Design</Link>

                {/* <TwitterLink /> */}
              </Route>
              
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
