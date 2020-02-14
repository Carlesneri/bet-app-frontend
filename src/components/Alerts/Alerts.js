import React from 'react';
import {getAlerts} from '../../getAlerts'
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';
import './Alerts.css'

export default function Alerts({state}){   
    let alerts = {}
    if(state) {
        alerts = getAlerts(state)
    }    
    if(alerts){
        console.log('alerts', alerts);
        const {alertsOP, alertsDrop, alertsTennis} = alerts
        console.log('alertsDrop', alertsDrop);
        
        if(alertsOP.length || alertsDrop.length || alertsTennis.length){
            return (
                <div>
                    {alertsOP.length > 0 && 
                        <div className="alerts-block">
                            <h6>Comparator</h6>
                            <div className="alerts-list">
                                {alertsOP.map((alert, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={alert.url} 
                                                target="_blank"  
                                                rel="noopener noreferrer">
                                                {alert.name}
                                            </a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                    {alertsDrop.length > 0 &&
                        <div className="alerts-block">
                            <h6>Drop</h6>
                            <hr/>
                            <div className="alerts-list">
                                {alertsDrop.map((alert, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={alert.url} 
                                                target="_blank"  
                                                rel="noopener noreferrer">
                                                {alert.name}
                                            </a>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>    
                    }
                    {alertsTennis.length > 0 &&
                        <div className="alerts-block">
                            <h6>Tennis</h6>
                            <hr/>
                            <div className="alerts-list">
                                {alertsTennis.map((alert, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={alert.urlMatch} 
                                                target="_blank"  
                                                rel="noopener noreferrer">
                                                {alert.name}
                                            </a>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>    
                    }
                </div>
            )
        }else return <SpinnerComponent />
    }else return <h5>No hay alertas</h5>
}