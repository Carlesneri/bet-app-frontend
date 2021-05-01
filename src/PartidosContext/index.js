import React, { createContext, useEffect, useState, useReducer } from "react"
import star from '../images/star.png'
import { getMatches, getOddsPortalPartidos } from "../database"
import { getAlerts } from "../getAlerts"
import { matchesReducer } from "../reducers/matchesReducer"
import { alertsReducer, ALERTS_ACTIONS } from "../reducers/alertsReducer"
import { comparatorReducer } from "../reducers/comparatorReducer"

const PartidosContext = createContext()

const PartidosProvider = ({ children }) => {

  function notificate(alert) {
    const notification = new Notification(alert.name, {
      body: `p1: ${alert.percent1}, p2: ${alert.percent2}, p3: ${alert.percent3}`,
      icon: star,
    })
    notification.onclick = () => {
      window.open(alert.url, "_blank")
    }
  }

  const [isFirstAlerts, setIsFirstAlerts] = useState(true)
  const [comparatorMatches, dispatchComparatorMatches] = useReducer(comparatorReducer, [])
  const [matches, dispatchMatches] = useReducer(matchesReducer, [])
  // const [players, setPlayers] = useState([])
  const [alerts, dispatchAlerts] = useReducer(alertsReducer, [])

  useEffect(() => {
    getOddsPortalPartidos(dispatchComparatorMatches)
    getMatches(dispatchMatches)
    // getPlayers(setPlayers)
  }, [])

  useEffect(() => {
    let {comparator: alertsComparator, matches: matchesComparator} = getAlerts({comparatorMatches, matches})

    // console.log(alertsComparator)

    if(alertsComparator.length && !alerts.length){
      dispatchAlerts({ type: ALERTS_ACTIONS.ADD, payload: [...alertsComparator, ...matchesComparator]})
      setIsFirstAlerts(false)
    }

    if(!isFirstAlerts) {
      let isNewAlert = false
      
      alertsComparator.forEach(alert => {
        const isAlerted = alerts.find(alerted => alerted.name === alert.name)
        if(!isAlerted) {
          isNewAlert = true
          // console.log([...alerts, alert])
          notificate(alert)
        }
      })

      matchesComparator.forEach(alert => {
        const isAlerted = alerts.find(alerted => alerted.name === alert.name)
        if(!isAlerted) {
          isNewAlert = true
          // console.log([...alerts, alert])
          notificate(alert)
        }
      })

      isNewAlert && dispatchAlerts({ type: ALERTS_ACTIONS.ADD, payload: [...alertsComparator, ...matchesComparator] })
    }
  },[comparatorMatches, matches, alerts, isFirstAlerts])

  return (
    <PartidosContext.Provider value={{ matches, comparatorMatches, dispatchComparatorMatches, dispatchMatches, alerts }}>
      {children}
    </PartidosContext.Provider>
  )
}

export { PartidosProvider, PartidosContext }
