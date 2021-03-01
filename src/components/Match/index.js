import React, { useState, useEffect, useCallback } from "react"
import "./match.css"
import { getPlayerData } from '../../database'

const greenColor = '#009432'
const redColor = "#EA2027"
const greyColor = "#bcbfc2"

const Match = ({ match }) => {

  const percentStyle = useCallback(perc => {
    return {fontSize: Math.round(perc) * 1.5 + 10}
  }, [])
  

  const setCoefColor = useCallback(cuof => {
    if(cuof) return cuof > 0 ? greenColor : redColor
    return greyColor
  }, [])


  const [player1Data, setPlayer1Data] = useState({})
  const [player2Data, setPlayer2Data] = useState({})

  useEffect(() => {
    getPlayerData(match.player1Name, setPlayer1Data)
    getPlayerData(match.player2Name, setPlayer2Data)
  }, [match.player1Name, match.player2Name])

  // player1Data && player1Data.surface && player1Data.surface[match.surfaceCode] && console.log(player1Data.surface[match.surfaceCode]) 

  return (
    <table className="match">
      <tbody>
        <tr className="title">
          <td>
            <a href={match.url} target="_blank" rel="nofollow noopener noreferrer">
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
