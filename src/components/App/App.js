import React, { Component } from "react";
import { Switch, Route, HashRouter } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Home from '../Home/Home';
import OddsportalDrop from '../OddsportalDrop/OddsportalDrop';
import Drop from '../Drop/Drop'
import TennisFinder from '../Tennis/TennisFinder'
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter >
        <Nav />
        <div className="switch-routes">
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/comparator' exact component={OddsportalDrop} />
            <Route path='/drop' exact component={Drop} />
            <Route path='/tennis' exact component={TennisFinder} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
