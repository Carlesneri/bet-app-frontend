import React, { Component } from "react";
import Partido from "./Partido";
import '../Nav/Nav.css'
import "./Partidos.css";
import NoPartidos from "../NoPartidos/NoPartidos";



class Partidos extends Component {
    
  render() {
    const MIN_PERCENT = 3.5;
    const { partidos } = this.props;
    const visible = () => {'display: none'}
    
    if(partidos.length){
      return (
        <div className="partidos-container">
          <div id="Partidos" className="partidos">
            {partidos.map((partido, index) => {
              if (partido.percent1 > MIN_PERCENT ||
                  partido.percent2 > MIN_PERCENT ||
                  partido.percent2 > MIN_PERCENT){
                visible();
                return <Partido key={index} index={index} partido={partido} />;
              }else return null
            })}
          </div>
        </div>
      )
    }else return (
      <div>
        <NoPartidos style={visible}/>
      </div>
    )
  }
}

export default Partidos;
