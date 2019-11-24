import React from "react";
import "./Cuota.css";

const Cuota = ({ cuota, style }) => {
    const styleCuota = {color: style} ;
    return(
     <div className="small cuota" style={styleCuota}>
        {`${cuota}`}
    </div>
    )
}
export default Cuota;
