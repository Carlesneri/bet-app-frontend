import React, { useContext } from "react"
import { PartidosContext } from "../../PartidosContext"
import "./Alerts.css"
import {COMPARATOR_ACTIONS} from '../../reducers/comparatorReducer'
import {MATCHES_ACTIONS} from '../../reducers/matchesReducer'

export default function Alerts() {
  const {alerts, dispatchMatches, dispatchComparatorMatches} = useContext(PartidosContext)

  function handleClickAlert(event) {
    const url = event.target.href
    const alert = event.target.dataset.alert

    if(url.includes('tennisexplorer')) {
      dispatchMatches({
        type: MATCHES_ACTIONS.IS_VISITED,
        payload: alert
      })
    } else {
      dispatchComparatorMatches({
        type: COMPARATOR_ACTIONS.IS_VISITED,
        payload: alert
      })
    }
  }

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
                      onClick={handleClickAlert}
                      href={alert.url}
                      data-alert={alert.name}
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
