import React, { createContext, useEffect, useState, useReducer } from "react"
import star from '../images/star.png'
import { getMatches, getOddsPortalPartidos } from "../database"
import { getAlerts } from "../getAlerts"
import { matchesReducer, MATCHES_ACTIONS } from "../reducers/matchesReducer"
import { alertsReducer, ALERTS_ACTIONS } from "../reducers/alertsReducer"
import { comparatorReducer, COMPARATOR_ACTIONS } from "../reducers/comparatorReducer"

const PartidosContext = createContext()

const PartidosProvider = ({ children }) => {

  const [isFirstAlerts, setIsFirstAlerts] = useState(true)

  const [comparatorMatches, dispatchComparatorMatches] = useReducer(comparatorReducer, [])
  const [matches, dispatchMatches] = useReducer(matchesReducer, [])
  const [alerts, dispatchAlerts] = useReducer(alertsReducer, [])

  useEffect(() => {
    getOddsPortalPartidos(dispatchComparatorMatches)
    getMatches(dispatchMatches)
  }, [])


  function notificate(alert) {
    const notification = new Notification(alert.name, {
      body: `p1: ${alert.percent1}, p2: ${alert.percent2}, p3: ${alert.percent3}`,
      icon: star,
    })
    notification.onclick = () => {
      if(alert.url.includes('tennisexplorer')) {
        dispatchMatches({
          type: MATCHES_ACTIONS.IS_VISITED,
          payload: alert.name
        })
      } else {
        dispatchComparatorMatches({
          type: COMPARATOR_ACTIONS.IS_VISITED,
          payload: alert.name
        })

      }
      //--> dispatch add alert ?
      window.open(alert.url, "_blank")
    }
  }

  useEffect(() => {
    let {comparator: alertsComparator, matches: alertsMatches} = getAlerts({comparatorMatches, matches})

    if((alertsComparator.length || alertsMatches.length) && !alerts.length){
      dispatchAlerts({ type: ALERTS_ACTIONS.ADD, payload: [...alertsComparator, ...alertsMatches]})
      setIsFirstAlerts(false)
    }

    if(!isFirstAlerts) {
      let isNewAlert = false
      
      alertsComparator.forEach(alert => {
        const isAlerted = alerts.find(alerted => alerted.name === alert.name)
        if(!isAlerted) {
          isNewAlert = true
          notificate(alert)
        }
      })

      alertsMatches.forEach(alert => {
        const isAlerted = alerts.find(alerted => alerted.name === alert.name)
        if(!isAlerted) {
          isNewAlert = true
          notificate(alert)
        }
      })

      isNewAlert && dispatchAlerts({ type: ALERTS_ACTIONS.ADD, payload: [...alertsComparator, ...alertsMatches] })
    }
  },[comparatorMatches, matches, alerts, isFirstAlerts])

  return (
    <PartidosContext.Provider value={{ matches, comparatorMatches, dispatchComparatorMatches, dispatchMatches, alerts }}>
      {children}
    </PartidosContext.Provider>
  )
}

export { PartidosProvider, PartidosContext }
