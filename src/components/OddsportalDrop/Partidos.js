import React, { Component } from "react";
import Partido from "./Partido";
import UpArrow from '../UpArrow/UpArrow';
import '../Nav/Nav.css'
import "./Partidos.css";
import NoPartidos from "../NoPartidos/NoPartidos";



class Partidos extends Component {
    
  render() {
    const MIN_PERCENT = 1;
    const { partidos, op } = this.props;
    const visible = () => {'display: none'}
    
    if(partidos.length && op){
      return (
        <div className="partidos-container">
          <div id="Partidos" className="partidos">
            {partidos.map((partido, index) => {
              if (partido.percent1 > MIN_PERCENT ||
                  partido.percent2 > MIN_PERCENT ||
                  partido.percent2 > MIN_PERCENT){
                visible();
                const partidoOp = op.find( match => partido.url.includes(match.url))
                return <Partido key={index} index={index} partido={partido} partidoOp={partidoOp}/>;
              }else return null
            })}
          </div>
          <div className="up-arrow-container">
            <UpArrow />
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
