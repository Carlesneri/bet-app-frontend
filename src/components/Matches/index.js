import UpArrow from '../UpArrow'
import React, { useContext, useState, useEffect } from 'react'
import { PartidosContext } from '../../PartidosContext'
import Match from '../Match/index.js'
import { getPercent } from '../../database'
import './matches.css'
import NoPartidos from '../NoPartidos/NoPartidos'
import { useCookies } from 'react-cookie'
import {MATCHES_ACTIONS} from '../../reducers/matchesReducer'

const Matches = () => {
  const { matches, dispatchMatches } = useContext(PartidosContext)
  const [cookies] = useCookies(['visited-comparator-matches'])
  const [lastVisit, setLastVisit] = useState('')
  const [filteredPartidos, setFilteredPartidos] = useState(matches)
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    const newFilteredPartidos = filtered ?
    matches.filter(partido => partido.name === lastVisit || (partido.visited === false || partido.visited === undefined)) 
    : matches
    setFilteredPartidos(newFilteredPartidos)
  }, [filtered, matches, lastVisit])

  useEffect(() => {
    if(matches.length > 0) {
      const vistedMatchesCookie = cookies['visited-matches'] || []
      
      vistedMatchesCookie.length && vistedMatchesCookie.forEach(match => 
        {
          dispatchMatches({type: MATCHES_ACTIONS.IS_VISITED, payload: match})
        })
    }

  }, [cookies, dispatchMatches, matches.length])

  filteredPartidos.forEach((match) => {
    match.player1Perc = getPercent(match.player1Aver, match.player1Max)
    match.player2Perc = getPercent(match.player2Aver, match.player2Max)
  })
  filteredPartidos.sort((a, b) =>
    Math.max(b.player1Perc, b.player2Perc) -
    Math.max(a.player1Perc, a.player2Perc)
  )

  return filteredPartidos.length ? (
    <>
      <nav className="partidos-nav">
        <button onClick={() => setFiltered(!filtered)}>
          {filtered ? 'not visited' : 'all'}
        </button>
      </nav>
      <div className='matches'>
        {filteredPartidos.map((match, i) => (
          <Match key={i} match={match} lastVisit={lastVisit} setLastVisit={setLastVisit} />
          ))}
        <div className='up-arrow-container'>
          <UpArrow />
        </div>
      </div>
    </>
  ) : (
    <NoPartidos />
  )
}

export default Matches
