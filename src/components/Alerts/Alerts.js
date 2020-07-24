import React, { useState, useEffect } from 'react';
// import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';
import './Alerts.css'
import star from '../../images/star.png'


export default function Alerts({ alerts }){   
    const { alertsOP, alertsDrop, alertsTennis } = alerts
    
    const [alerted, setAlerted] = useState([])

    useEffect(() => {
        let newAlerts = []
        if(Notification.permission === "granted"){
            alertsOP.forEach( alertOP => {
                const alert = alerted.find(alert => alert.name === alertOP.name)
                if(! alert) {
                    newAlerts.push(alertOP)
                    notificate(alertOP)
                }
            })
            setAlerted(alerted.concat(newAlerts))
        }
    }, [alerts])

    function notificate(alert){
        const notification = new Notification(alert.name, {
            body: `p1: ${alert.percent1}, p2: ${alert.percent2}, p3: ${alert.percent3}`,
            icon: star

        })
        notification.onclick = () => {
            window.open(alert.url, "_blank")
        }
    }   
    
    if(alertsOP.length || alertsDrop.length || alertsTennis.length){
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