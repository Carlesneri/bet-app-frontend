import React, { Component } from "react";
import Partido from '../Partido/Partido';
import './Partidos.css'

class Partidos extends Component {

  render() {
    const MIN_PERCENT = -4.5;
    const {partidos} = this.props
    

    if(partidos !== []){
      return(
        <div id='Partidos' className="partidos">
          { 
            partidos.map( (partido, index) => {
              if(partido.percent1 < MIN_PERCENT || partido.percent2 < MIN_PERCENT || partido.percent2 < MIN_PERCENT){
              return <Partido key={index} partido={partido} />;
              } else return null;
            })
          }
        </div>  
      )
    }
    return <div><h1>Sin partidos aun!. Añadir spinner.</h1></div>
    
    
  }
        
}

export default Partidos;
