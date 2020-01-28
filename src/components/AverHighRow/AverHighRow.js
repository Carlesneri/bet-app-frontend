import React from "react";
import Cuota from "../Cuota/Cuota.js";
import "./AverHighRow.css";

const AverHighRow = ({ aver, high, percent }) => {
  
  var percentStyle = {fontSize: (Math.round(percent) * 1.5 + 5)};
  const greenColor = '#009432'
  const redColor = "#EA2027"
  const greyColor = "#bcbfc2"

  function getStyle(type, index){   
    if  (index > 0) {
      switch(type){
        case 'aver':
          if (aver[index].cuota < aver[index - 1].cuota) return greenColor
          if (aver[index].cuota > aver[index - 1].cuota) return redColor
          break;
        case 'high': 
          if (high[index].cuota < high[index - 1].cuota) return greenColor
          if (high[index].cuota > high[index - 1].cuota) return redColor
          break;
        default: break;
      }
    }
    return greyColor
  }

  if(aver.length || high.length){
    return (
      <div>
        <div className="aver-high-percent-row">
          <div className="aver-high-row">
            <div className="aver-row">
              <div className="aver-title">Average</div>
              <div className="cuota-list">
                {aver.map((data, index) => {     
                  const style = getStyle('aver', index);         
                  return <Cuota key={data.time} time={data.time} cuota={data.cuota} style={style}/>;
                })}
              </div>
            </div>
            <div className="high-row">
              <div className="high-title">Highest</div>
              <div className="cuota-list">
                {high.map((data, index) => {
                  const style = getStyle('high', index);         
                  return <Cuota key={data.time} time={data.time} cuota={data.cuota} style={style}/>;
                })}
              </div>
            </div>
          </div>
          <p className="percent" style={percentStyle}>{percent}</p>
        </div>
        <hr />
      </div>
    );
  }
  else return null;
  
};


export default AverHighRow;
