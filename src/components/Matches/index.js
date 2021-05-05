import UpArrow from '../UpArrow'
import React, { useContext, useState } from 'react'
import { PartidosContext } from '../../PartidosContext'
import Match from '../Match/index.js'
import { getPercent } from '../../database'
import './matches.css'
import NoPartidos from '../NoPartidos/NoPartidos'

const Matches = () => {
  const { matches } = useContext(PartidosContext)

  const [lastVisit, setLastVisit] = useState('')

  matches.forEach((match) => {
    match.player1Perc = getPercent(match.player1Aver, match.player1Max)
    match.player2Perc = getPercent(match.player2Aver, match.player2Max)
  })

  // matches.sort((a, b) => {
  //   if(a.visited && !b.visited) return 1
  //   return -1
  // })
  matches.sort((a, b) =>
    Math.max(b.player1Perc, b.player2Perc) -
    Math.max(a.player1Perc, a.player2Perc)
  )

  return matches.length ? (
    <div className='matches'>
      {matches.map((match, i) => (
        <Match key={i} match={match} lastVisit={lastVisit} setLastVisit={setLastVisit} />
      ))}
      <div className='up-arrow-container'>
        <UpArrow />
      </div>
    </div>
  ) : (
    <NoPartidos />
  )
}

export default Matches
