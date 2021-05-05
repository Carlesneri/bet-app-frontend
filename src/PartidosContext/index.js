import React, { createContext, useEffect, useState, useReducer } from "react"
import star from '../images/star.png'
import { getMatches, getOddsPortalPartidos } from "../database"
import { getAlerts } from "../getAlerts"
import { matchesReducer, MATCHES_ACTIONS } from "../reducers/matchesReducer"
// import { teamsReducer } from "../reducers/teamsReducer"
import { alertsReducer, ALERTS_ACTIONS } from "../reducers/alertsReducer"
import { comparatorReducer, COMPARATOR_ACTIONS } from "../reducers/comparatorReducer"

const PartidosContext = createContext()

const PartidosProvider = ({ children }) => {

  const [isFirstAlerts, setIsFirstAlerts] = useState(true)

  const [comparatorMatches, dispatchComparatorMatches] = useReducer(comparatorReducer, [])
  // const [teams, dispatchTeams] = useReducer(teamsReducer, [])
  const [matches, dispatchMatches] = useReducer(matchesReducer, [])
  // const [players, setPlayers] = useState([])
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


  // useEffect(() => {

  //   setInterval(() => {
  //     console.log('save team data')
  //     comparatorMatches.forEach(match => {
  //       if(match.player1){
  //         const isTeam1 = teams.find(team => team.name === match.player1)
  //         if(!teams.length || !isTeam1){
  //           saveTeamData(match.sport, match.player1, dispatchTeams)
  //         }
  //       }
  
  //       if(match.player2){
  //         const isTeam2 = teams.find(team => team.name === match.player2)
  //         if(!teams.length || !isTeam2){
  //           saveTeamData(match.sport, match.player2, dispatchTeams)
  //         }
  //       }
  //     })

  //   }, 30000)

    // return clearInterval(interval)

  // }, [])

  useEffect(() => {
    let {comparator: alertsComparator, matches: alertsMatches} = getAlerts({comparatorMatches, matches})

    // console.log(alertsComparator)

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
          // console.log([...alerts, alert])
          notificate(alert)
        }
      })

      alertsMatches.forEach(alert => {
        const isAlerted = alerts.find(alerted => alerted.name === alert.name)
        if(!isAlerted) {
          isNewAlert = true
          // console.log([...alerts, alert])
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
