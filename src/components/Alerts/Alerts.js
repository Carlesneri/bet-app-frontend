import React, { useContext } from "react"
import { PartidosContext } from "../../PartidosContext"
import "./Alerts.css"

export default function Alerts() {
  const alerts = useContext(PartidosContext).alerts

  if (alerts.length) {
    return (
      <div>
        {alerts.length > 0 && (
          <div className="alerts-block">
            <h6>Comparator</h6>
            <div className="alerts-list">
              {alerts.map((alert, index) => {
                return (
                  <div key={index}>
                    <a
                      href={alert.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {alert.name}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        )}
        {/* {alertsDrop.length > 0 && (
          <div className="alerts-block">
            <h6>Drop</h6>
            <hr />
            <div className="alerts-list">
              {alertsDrop.map((alert, index) => {
                return (
                  <div key={index}>
                    <a
                      href={alert.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {alert.name}
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        )} */}
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
                                            rel="nofollow noopener noreferrer">
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
  } else return <h5>No hay alertas</h5>
}
