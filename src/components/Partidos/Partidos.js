import React, { Component } from "react";
import Partido from '../Partido/Partido';
import './Partidos.css'

class Partidos extends Component {

  render() {
    const {partidos} = this.props
    
    return(
      <div id='Partidos' className="partidos">
        { partidos.map( (partido, index) => {
           return <Partido key={index} partido={partido} />
          })
        }  
      </div>       
    )
    
  }
        
}

export default Partidos;
