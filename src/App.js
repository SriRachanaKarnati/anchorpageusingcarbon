import React from 'react';
import './app.scss';
import './index.scss';
import Menuwithicons from './components/Menuwithicons';
import Welcome from './components/Welcome';
import Showcase from './components/Showcase';
import Startinganewproject from './components/Startinganewproject';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Developerprereading from './components/Developerprereading';
import Developersetup from './components/Developersetup';
import Howtocontribute from './components/Howtocontribute';
import Adaptercodebase from './components/Adaptercodebase';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/Menuwithicons" component={Menuwithicons} />
            <Route path="/Welcome" component={Welcome} />
            <Route path="/Showcase" component={Showcase} />
            <Route
              path="/Startinganewproject"
              component={Startinganewproject}
            />
            <Route
              path="/Developerprereading"
              component={Developerprereading}
            />
            <Route path="/Developersetup" component={Developersetup} />
            <Route path="/Howtocontribute/" component={Howtocontribute} />
            <Route path="/Adaptercodebase" component={Adaptercodebase} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
