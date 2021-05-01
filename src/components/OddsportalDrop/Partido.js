import React, { useState, useEffect, useCallback, useContext, useMemo } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEye as fasEye } from '@fortawesome/free-solid-svg-icons'
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons'
import './Partido.css'
import AverHighRow from './AverHighRow'
import { getTeamData } from '../../database'
import { setCoefColor as setCoefColorUtil, eyeStyle } from '../../utils'
import { PartidosContext } from '../../PartidosContext'
import { COMPARATOR_ACTIONS } from '../../reducers/comparatorReducer'


function Partido({ partido }) {

  // useEffect(() => {
  //   console.log(partido.visited)
  // }, [partido])

  const { dispatchComparatorMatches } = useContext(PartidosContext)

  const NUM_CUOTAS = 8

  const filter = useCallback((array, NUM_CUOTAS) => {
    if (!array) return 1;
    else return array.filter((data, index) =>
    array.length - index < NUM_CUOTAS
    )
  }, [])

  const setCoefColor = useCallback(setCoefColorUtil, [])

  //-->Obtenemos datos de la url
  const urlSplit = partido.url.split('/')
  let i = urlSplit.length
  partido.game = urlSplit[i - 5]
  partido.country = urlSplit[i - 4]
  partido.tournament = urlSplit[i - 3].replace(/-/g, ' ')

  partido.aver1 = filter(partido.aver1, NUM_CUOTAS)
  partido.aver2 = filter(partido.aver2, NUM_CUOTAS)
  partido.aver3 = filter(partido.aver3, NUM_CUOTAS)
  partido.high1 = filter(partido.high1, NUM_CUOTAS)
  partido.high2 = filter(partido.high2, NUM_CUOTAS)
  partido.high3 = filter(partido.high3, NUM_CUOTAS)

  const minutesAgo = ((Date.now() - partido.last) / (1000 * 60)).toFixed(1)
  const minAgoText = minutesAgo + ' min. ago'

  const titleStyle = useMemo(() => {
    const bgAlpha = 1 - minutesAgo / 60
    return {
      backgroundColor: `rgba(0, 100, 0, ${bgAlpha})`,
    }
  }, [minutesAgo])

  const setIsVisited = () => dispatchComparatorMatches({ type: COMPARATOR_ACTIONS.IS_VISITED, payload: partido.name})

  function toggleVisited() {
    return dispatchComparatorMatches({ type: COMPARATOR_ACTIONS.TOGGLE_VISITED, payload: partido.name})
  }

  const [team1Data, setTeam1Data] = useState({})
  const [team2Data, setTeam2Data] = useState({})

  useEffect(() => {
    getTeamData(partido.sport, partido.player1, setTeam1Data)
    getTeamData(partido.sport, partido.player2, setTeam2Data)
    return () => {
      setTeam1Data(null)
      setTeam2Data(null)
    }
  }, [partido.sport, partido.player1, partido.player2])

  let {
    aver1,
    aver2,
    aver3,
    high1,
    high2,
    high3,
    name,
    // player1,
    // player2,
    url,
    // sport,
    // last,
    percent1,
    percent2,
    percent3,
    game, 
    country,
    tournament,
    visited = false
  } = partido

  return (
    <div className='partido card-bg'>
      <div className='partido-title-op' style={titleStyle}>
        <div className="partido-title-eye" style={eyeStyle(visited)} onClick={toggleVisited} >
          {visited ? 
            <FontAwesomeIcon icon={fasEye} />
            : <FontAwesomeIcon icon={farEye} />
          }
        </div>
        <div className='partido-name-op'>
          <a onClick={setIsVisited} href={url} target='_blank' rel='nofollow noopener noreferrer'>
            {name}
          </a>
        </div>
        <div className='min-ago-group'>
          <span title={minAgoText} className='min-ago-text'>
            {minutesAgo}
          </span>
          <span>"</span>
        </div>
      </div>
      <hr />
      <div className='partido-body'>
        <div className='partido-data'>
          <span>{game}</span>
          <span> - </span>
          <span>{country}</span>
          <span> - </span>
          <span>{tournament}</span>
        </div>
        <div className='aver-high-rows'>
          <AverHighRow aver={aver1} high={high1} percent={percent1} />
          <AverHighRow aver={aver2} high={high2} percent={percent2} />
          <AverHighRow aver={aver3} high={high3} percent={percent3} />
        </div>
        {(team1Data || team2Data) && (
          <div className='partido-op'>
            {team1Data && (
              <span>
                QLocal: 
                <span style={{color: setCoefColor(team1Data.coef)}}>
                  {team1Data.coef && team1Data.coef.toFixed(2)} ({team1Data.numOfMatches})
                </span>
              </span>
            )}
            {team2Data && (
              <span>
                QVisitante: 
                <span style={{color: setCoefColor(team2Data.coef)}}>
                  {team2Data.coef && team2Data.coef.toFixed(2)} ({team2Data.numOfMatches})
                </span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Partido
