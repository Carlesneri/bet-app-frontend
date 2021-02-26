import React from "react"
import "./match.css"

const Match = ({ match }) => {

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
                  <td>{match.player1Name}</td>
                  <td>{match.player2Name}</td>
                </tr>
                <tr>
                  <td>
                    <table className="player">
                      <thead>
                        <tr>
                          <td>High</td>
                          <td>Aver</td>
                          <td>Perc</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.player1Max}</td>
                          <td>{match.player1Aver}</td>
                          <td>{match.player1Perc}</td>
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
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{match.player2Max}</td>
                          <td>{match.player2Aver}</td>
                          <td>{match.player2Perc}</td>
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
