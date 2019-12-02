import React from "react";
import Cuota from "../Cuota/Cuota.js";
import "./AverHighRow.css";

const AverHighRow = ({ aver, high, percent }) => {
  
  var percentStyle = {fontSize: Math.round(percent) * 2.5};
  
  function getStyle(type, index){   
    if  (index > 0) {
      switch(type){
        case 'aver':
          if (aver[index].cuota < aver[index - 1].cuota) return 'green';
          if (aver[index].cuota > aver[index - 1].cuota) return 'red'
          break;
        case 'high': 
          if (high[index].cuota < high[index - 1].cuota) return 'green';
          if (high[index].cuota > high[index - 1].cuota) return 'red';
          break;
        default: break;
      }
    }
    return 'black' 
  }

  if(aver.length || high.length){
    return (
      <div>
        <div className="aver-high-percent-row">
          <div className="aver-title">Average</div>
          <div className="aver-cuota-list">
            {aver.map((data, index) => {     
              const style = getStyle('aver', index);         
              //cuotaAverAnt = data.cuota;
              return <Cuota key={data.time} time={data.time} cuota={data.cuota} style={style}/>;
            })}
          </div>
          <div className="high-title">Highest</div>
          <div className="high-cuota-list">
            {high.map((data, index) => {
              const style = getStyle('high', index);         
              //cuotaHighAnt = data.cuota;
              return <Cuota key={data.time} time={data.time} cuota={data.cuota} style={style}/>;
            })}
          </div>
          <div className="percent" style={percentStyle}>{percent}</div>
        </div>
        <div>
          <hr />
        </div>
      </div>
    );
  }
  else return null;
  
};


export default AverHighRow;
