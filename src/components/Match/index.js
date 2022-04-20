import React, { useState, useEffect, useCallback, useContext } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEye as fasEye } from '@fortawesome/free-solid-svg-icons'
import { faEye as farEye } from '@fortawesome/free-regular-svg-icons'
import "./match.css"
import { getPlayerData } from '../../database'
import { percentStyle as percentStyleUtil, setCoefColor as setCoefColorUtil, eyeStyle } from '../../utils'
import { PartidosContext } from '../../PartidosContext'
import { MATCHES_ACTIONS } from '../../reducers/matchesReducer'
import { useCookies } from "react-cookie"

const Match = ({ match, lastVisit, setLastVisit }) => {
  const [cookies, setCookies] = useCookies(['visited-matches'])

  const wereVisited = match.visited || false
  const visitedMatchesCookie = cookies['visited-matches'] || []
  
  const cookieOpts = {
    expires: new Date(Date.now() + 10*60*60*1000)
  }

  const { dispatchMatches } = useContext(PartidosContext)

  const percentStyle = useCallback(percentStyleUtil, [])  

  const setCoefColor = useCallback(setCoefColorUtil, [])

  const [player1Data, setPlayer1Data] = useState({})
  const [player2Data, setPlayer2Data] = useState({})

  useEffect(() => {
    getPlayerData(match.player1Name, setPlayer1Data)
    getPlayerData(match.player2Name, setPlayer2Data)

    return () => {
      setPlayer1Data({})
      setPlayer2Data({})
    }
  }, [match.player1Name, match.player2Name])

  function toggleVisited() {
    dispatchMatches({ type: MATCHES_ACTIONS.TOGGLE_VISITED, payload: match.name})

    wereVisited 
    ? 
      setCookies('visited-matches', cookies['visited-matches'].filter(cookieMatch => cookieMatch !== match.name), cookieOpts)
    : 
      setCookies('visited-matches', [...visitedMatchesCookie, match.name], cookieOpts)
  }

  const setIsVisited = () => {
    dispatchMatches({ type: MATCHES_ACTIONS.IS_VISITED, payload: match.name})

    !wereVisited &&
    setCookies('visited-matches', [...visitedMatchesCookie, match.name], cookieOpts)
  }

  function handleClickAnchor() {
    setIsVisited()
  }
  
  function handleClickMatch() {
    setLastVisit(match.name)    
  }

  const isLastVisited = () =>  match.name === lastVisit ? 
  {border: '1px solid #bcbfc2'} : null


  return (
    <table className="match" style={isLastVisited()}>
      <tbody>
        <tr className="title" onClick={handleClickMatch}>
          <td className="match-title-eye" style={eyeStyle(match.visited)} onClick={toggleVisited} >
            {match.visited ? 
              <FontAwesomeIcon icon={fasEye} />
              : <FontAwesomeIcon icon={farEye} />
            }
          </td>
          <td>
            <div className="match-title-eye" style={eyeStyle()} onClick={toggleVisited} >
            </div>
            <a href={match.url} target="_blank" rel="nofollow noopener noreferrer" onClick={handleClickAnchor}>
              {match.player1Name} - {match.player2Name}
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <table className="players">
              <tbody>
                <tr>
                  <td><a target="_blank" rel="noopener noreferrer nofollow" href={player1Data.url}>{match.player1Name}</a></td>
                  <td><a target="_blank" rel="noopener noreferrer nofollow" href={player2Data.url}>{match.player2Name}</a></td>
                </tr>
                <tr>
                  <td>
                    <table className="player">
                      <thead>
                        <tr>
                          <td>High</td>
                          <td>Aver</td>
                          <td>Perc</td>
                          <td>Cuof</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.player1Max}</td>
                          <td>{match.player1Aver}</td>
                          <td className="perc" style={percentStyle(match.player1Perc)}>
                            {match.player1Perc}
                          </td>
                          {player1Data && player1Data.surface && player1Data.surface[match.surfaceCode] && player1Data.surface[match.surfaceCode].numOfMatches ?
                            <td style={{color: setCoefColor(player1Data.surface[match.surfaceCode].coef)}}>
                              {player1Data.surface[match.surfaceCode].coef} ({player1Data.surface[match.surfaceCode].numOfMatches})
                            </td>
                            : 
                            <td> --- </td>
                          } 
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table className="player">
                      <thead>
                        <tr>
                          <td>High</td>
                          <td>Aver</td>
                          <td>Perc</td>
                          <td>Cuof</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.player2Max}</td>
                          <td>{match.player2Aver}</td>
                          <td className="perc" style={percentStyle(match.player2Perc)}>{match.player2Perc}</td>
                          {player2Data && player2Data.surface && player2Data.surface[match.surfaceCode] && player2Data.surface[match.surfaceCode].numOfMatches ?
                            <td style={{color: setCoefColor(player2Data.surface[match.surfaceCode].coef)}}>
                              {player2Data.surface[match.surfaceCode].coef} ({player2Data.surface[match.surfaceCode].numOfMatches})
                            </td>
                            : 
                            <td> --- </td>
                          } 
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Match
