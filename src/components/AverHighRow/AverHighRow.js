import React from "react";
import Cuota from "../Cuota/Cuota.js";
import "./AverHighRow.css";

const AverHighRow = ({ aver, high, percent }) => {

  var cuotaAverAnt = aver[0].cuota
  var cuotaHighAnt = high[0].cuota
  var percentStyle = {fontSize: Math.round(percent)*-2+5}

  return (
    <div className="aver-high-percent-row">
      <div className="aver-title">Aver:</div>
      <div className="aver-cuota-list">
        {
        aver.map(data => {     
          const style = getStyle(data.cuota, cuotaAverAnt);         
          cuotaAverAnt = data.cuota;
          return <Cuota key={data.time} cuota={data.cuota} style={style}/>;
        })}
      </div>
      <div className="high-title">High:</div>
      <div className="high-cuota-list">
        {high.map(data => {
          const style = getStyle(data.cuota, cuotaHighAnt);         
          cuotaHighAnt = data.cuota;
          return <Cuota key={data.time} cuota={data.cuota} style={style}/>;
        })}
      </div>
      <div className="percent" style={percentStyle}>{percent}</div>
    </div>
  );

  function getStyle(cuota, cuotaAnt){
      if  (cuota < cuotaAnt) return 'green'
      if (cuota > cuotaAnt) return 'red' 
      return 'black'
  }
};


export default AverHighRow;
