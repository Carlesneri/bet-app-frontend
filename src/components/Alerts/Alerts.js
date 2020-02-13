import React from 'react';

export default function Alerts({state}){    
    return <h5>No hay alertas</h5>
    // if(alerts.length){
    //     return (
    //         <div>
    //             {
    //             alerts.map((alert, index) => {
    //                 alert = JSON.parse(alert)
    //                 return (
    //                     <div key={index}>
    //                         <a href={alert.url} 
    //                             target="_blank"  
    //                             rel="noopener noreferrer">
    //                             {alert.name}
    //                         </a>
    //                     </div>
    //                 )
    //             })  
    //             }
    //         </div>    
    //     )
    // }else return 'No hay alertas'
    
}