import React, { Component } from "react";
import { Switch, Route, HashRouter } from 'react-router-dom';
import Nav from '../Nav/Nav'
import RouterManager from '../RouterManager/RouterManager';
import Alerts from '../Alerts/Alerts'
import "./App.css";
import { 
  getOddsPortalPartidos, 
  getDropPartidos, 
  getTennisPartidos,
  getOpPartidos
} from '../../database'
import { getAlerts } from '../../getAlerts'

class App extends Component {
  
  constructor(){
    super()
    this.state = {
      partidosOP: null,
      drop: null,
      tennis: null,
      op: null
    }
  }
  
  componentDidMount(){
    Notification.requestPermission()
    const stateSetter = state => this.setState(state)
    getOddsPortalPartidos(stateSetter)
    getDropPartidos(stateSetter)
    getTennisPartidos(stateSetter) 
    getOpPartidos(stateSetter)
  }
  
  render() {
    const alerts = getAlerts(this.state)
    return (
      <HashRouter>
        <div className="nav-container">
          <Nav />
        </div>
        <div className="body-layout">
          <div className="switch-routes">
            <Switch>
              <Route path='/' exact>
                <RouterManager component='home' partidos={this.state}/>  
              </Route> 
              <Route path='/comparator'>
                <RouterManager component='comparator' partidos={this.state} />  
              </Route> 
              <Route path='/drop'>
                <RouterManager component='drop' partidos={this.state} />  
              </Route> 
              <Route path='/tennis'>
                <RouterManager component='tennis' partidos={this.state} />  
              </Route>
              <Route path='/op'>
                <RouterManager component='op' partidos={this.state} />  
              </Route>
            </Switch>
          </div>
          <div className="right-bar">
            <div className="alerts">
              <Alerts alerts={alerts} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
