import UpArrow from '../UpArrow'
import React, { useContext } from 'react'
import { PartidosContext } from '../../PartidosContext'
import Match from '../Match/index.js'
import { getPercent } from '../../database'
import './matches.css'

const Matches = () => {
  const { matches } = useContext(PartidosContext)

  matches.forEach((match) => {
    match.player1Perc = getPercent(match.player1Aver, match.player1Max)
    match.player2Perc = getPercent(match.player2Aver, match.player2Max)
  })
  // console.log(matches)

  matches.sort(
    (a, b) =>
      Math.max(b.player1Perc, b.player2Perc) -
      Math.max(a.player1Perc, a.player2Perc)
  )

  return matches.length ? (
    <div className='matches'>
      {matches.map((match, i) => (
        <Match key={i} match={match} />
      ))}
      <div className='up-arrow-container'>
        <UpArrow />
      </div>
    </div>
  ) : (
    <h1>Waiting for Matches</h1>
  )
}

export default Matches
