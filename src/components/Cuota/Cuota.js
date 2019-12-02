import React from "react";
import "./Cuota.css";

const Cuota = ({ time, cuota, style }) => {
    const minuteAgo = ((Date.now() - time)/60000).toFixed(1) + ' min. ago';
    const styleCuota = {color: style} ;
    return(
     <div title={minuteAgo} className="small cuota" style={styleCuota} >
        {`${cuota}`}
    </div>
    )
}
export default Cuota;
