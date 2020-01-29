import React, { Component } from "react";
import Nav from '../Nav/Nav';
import { Switch, Route, HashRouter } from 'react-router-dom';
import OddsportalDrop from '../OddsportalDrop/OddsportalDrop';
import Drop from '../Drop/Drop'
import Home from '../Home/Home';
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter >
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/comparator' exact component={OddsportalDrop} />
            <Route path='/drop' exact component={Drop} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
