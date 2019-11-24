import React, { Component } from "react";
import "./App.css";
import Partidos from "../Partidos/Partidos";
import db from '../../database'


class App extends Component {
  constructor() {
    super();
    this.state = {
      partidos:  []
    }

    
  }

  componentDidMount(){
    db.on("value", snap => {
      const newState = {
        partidos: [
        ]
      }
      snap.forEach(match => {
        const name = match.val().name
        const url = match.val().url
        
        newState.partidos
        .push({name, url});
      });
      this.setState(newState);
    
    });

    
    
  }
  
  render() {
    const { partidos } = this.state;

    return (
      <div id='app' className="App">
        <Partidos partidos={partidos} />
      </div>
    );
  }
}

export default App;
