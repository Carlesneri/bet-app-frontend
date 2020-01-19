import React, { Component } from "react";
import Partido from "../Partido/Partido";
import "./Partidos.css";


class Partidos extends Component {
    
  render() {
    const MIN_PERCENT = 3.5;
    const { partidos } = this.props;
    var hayPartidos = 'No hay partidos que mostrar';
    
    return (
      <>
        <div id="Partidos" className="partidos">
          {partidos.map((partido, index) => {
            if (partido.percent1 > MIN_PERCENT ||
                partido.percent2 > MIN_PERCENT ||
                partido.percent2 > MIN_PERCENT){
              hayPartidos = '';
              return <Partido key={index} partido={partido} />;
            }
            return null;
          })}
        </div>
        <div className='noPartidos'>
          <h1>{hayPartidos}</h1>
        </div>
      </>
    );
  }
}

export default Partidos;
