import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AnitquePage from './ANITQUE/pages/AnitquePage';
import NatashaPage from './NATASHA/pages/NatashaPage'
import VenissaPage from './VENISSA/Pages/VenissaPage'
import KamiliaPage from './KAMILIA/Pages/KamiliaPage'
import MalikoPage from './MALIKO/pages/MalikoPage';
import MikeyPage from './MICKEY/pages/MikeyPage'
import MatheldaPage from './MATHELDA/Pages/MatheldaPage';
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

              <Route path="/venissa"> 
                <VenissaPage />
              </Route>

              <Route path='/kamilia'>
                <KamiliaPage />
              </Route>

              <Route path='/maliko'>
                <MalikoPage />
              </Route>

              <Route path="/mikey">
                <MikeyPage />
              </Route>

              <Route path='/mathelda'>
                <MatheldaPage />
              </Route>
            
              <Route path="/">
                <h1>Welcome to this page</h1>
                <Link to="/antique">Antique Page Design</Link>
                Built with Love 💖 by Yoma <br />
                <Link to="/natasha">Natasha Page Design</Link><br />
                <Link to="/venissa"> 
                  Venissa Page Design
                </Link> <br />
                <Link to='/kamilia'>
                  Kamilia Page Design
                </Link> <br />
                <Link to='/maliko'>
                  Maliko Page Design
                </Link> <br />
                <Link to="/mikey">  
                  Mikey Page Design
                </Link> <br />
                <Link to='/mathelda'>
                  Mathelda Page Design
                </Link>

                {/* <TwitterLink /> */}
              </Route>
              
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
