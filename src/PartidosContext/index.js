import React, { createContext, useEffect, useState } from "react"
import star from '../images/star.png'
import { getMatches, getOddsPortalPartidos } from "../database"
import { getAlerts } from "../getAlerts"

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
  const [matches, setMatches] = useState([])
  const [comparatorMatches, setComparatorMatches] = useState([])
  // const [players, setPlayers] = useState([])
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    getMatches(setMatches)
    getOddsPortalPartidos(setComparatorMatches)
    // getPlayers(setPlayers)
  }, [])

  useEffect(() => {
    let {alertsOP} = getAlerts(comparatorMatches)
    if(alertsOP.length && !alerts.length){
      setAlerts(alertsOP)
      setIsFirstAlerts(false)
    }
    if(!isFirstAlerts) {
      alertsOP.forEach(alert => {
        const isAlerted = alerts.find(alerted => alerted.name === alert.name)
        if(!isAlerted) {
          console.log([...alerts, alert])
          setAlerts([...alerts, alert])
          notificate(alert)
        }
      })
    }
  },[comparatorMatches, alerts, isFirstAlerts])

  return (
    <PartidosContext.Provider value={{ matches, comparatorMatches, alerts }}>
      {children}
    </PartidosContext.Provider>
  )
}

export { PartidosProvider, PartidosContext }
