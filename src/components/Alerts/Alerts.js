import React, { useState, useEffect } from 'react';
import {getAlerts} from '../../getAlerts'
// import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';
import './Alerts.css'
import star from '../../images/star.png'

export default function Alerts({ state }){   

    const { alertsOP, alertsDrop } = getAlerts(state)

    const [alerted, setAlerted ] = useState(alertsOP)
    
    // console.log(alerted)
    
    function notificate(alert){
        const notification = new Notification(alert.name, {
            body: `p1: ${alert.percent1}, p2: ${alert.percent2}, p3: ${alert.percent3}`,
            icon: star
            
        })
        notification.onclick = () => {
            window.open(alert.url, "_blank")
        }
        const newAlerts = alerted
        newAlerts.push(alert)
        setAlerted(newAlerts)    
    }   

    useEffect(() => {
        const newAlerts = []
        alertsOP.forEach(alert => {
            const isAlerted = alerted.find(alertedItem => alertedItem.name === alert.name)

            // console.log('isAlerted', isAlerted)

            if(!isAlerted) {
                newAlerts.push(alert)
                notificate(alert)
            }
        })
        // setAlerted(alerted.concat(newAlerts))    
    })

    
    if(alertsOP.length){
        return (
            <div>
                {alertsOP.length > 0 && 
                    <div className="alerts-block">
                        <h6>Comparator</h6>
                        <div className="alerts-list">
                            {
                                alertsOP.map((alert, index) => {
                                    return (
                                        <div key={index}>
                                            <a href={alert.url} 
                                                target="_blank"  
                                                rel="noopener noreferrer">
                                                {alert.name}
                                            </a>
                                        </div>
                                    )
                                })
                            }
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
                {/* {alertsTennis.length > 0 &&
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
                } */}
            </div>
        )
    }else return <h5>No hay alertas</h5>
}