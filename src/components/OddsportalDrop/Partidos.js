import React, { useContext, useState, useEffect } from 'react'
import Partido from './Partido'
import UpArrow from '../UpArrow'
import '../Nav/Nav.css'
import './Partidos.css'
import NoPartidos from '../NoPartidos/NoPartidos'
import { PartidosContext } from '../../PartidosContext'
import { useCookies } from 'react-cookie'
import {COMPARATOR_ACTIONS} from '../../reducers/comparatorReducer'

const Partidos = () => {
  const { comparatorMatches: partidos, dispatchComparatorMatches } = useContext(PartidosContext)

  const [filteredPartidos, setFilteredPartidos] = useState(partidos)
  const [lastVisit, setLastVisit] = useState('')
  const [cookies] = useCookies(['visited-comparator-matches'])
  const [filtered, setFiltered] = useState(false)

  useEffect(() => {
    const newFilteredPartidos = filtered ?
    partidos.filter(partido => partido.name === lastVisit || (partido.visited === false || partido.visited === undefined)) 
    : partidos
    setFilteredPartidos(newFilteredPartidos)
  }, [filtered, partidos, lastVisit])

  useEffect(() => {
    if(partidos.length > 0) {
      const vistedPartidosCookie = cookies['visited-comparator-matches'] || []
      
      vistedPartidosCookie.length && vistedPartidosCookie.forEach(match => 
        {
          dispatchComparatorMatches({type: COMPARATOR_ACTIONS.IS_VISITED, payload: match})
        })
    }

  }, [cookies, dispatchComparatorMatches, partidos.length])
  
  // partidos.length && 
  filteredPartidos.sort((a, b) => {
    const aMax = Math.max(a.percent1, a.percent2, a.percent3)
    const bMax = Math.max(b.percent1, b.percent2, b.percent3)
    return bMax - aMax
  })
  // partidos.sort((a,b) => {
  //   if(a.visited && !b.visited) return 1
  //   return -1
  // })

  const MIN_PERCENT = 1

  return filteredPartidos.length ? (
    <>
      <nav className="partidos-nav">
        <button onClick={() => setFiltered(!filtered)}>
          {filtered ? 'not visited' : 'all'}
        </button>
      </nav>
      <div className='partidos-container'>
        <div id='Partidos' className='partidos'>
          {filteredPartidos.map((partido, index) => {
            if (
              partido.percent1 > MIN_PERCENT ||
              partido.percent2 > MIN_PERCENT ||
              partido.percent2 > MIN_PERCENT
            ) {
              return (
                <Partido
                  key={index}
                  index={index}
                  partido={partido}
                  lastVisit={lastVisit}
                  setLastVisit={setLastVisit}
                />
              )
            } else return null
          })}
        </div>
        <div className='up-arrow-container'>
          <UpArrow />
        </div>
      </div>
    </>
  ) : (
    <div>
      <NoPartidos />
    </div>
  )
}

export default Partidos
