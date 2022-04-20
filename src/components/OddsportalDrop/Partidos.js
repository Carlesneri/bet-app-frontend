import React, { useContext, useState, useEffect } from 'react'
import Partido from './Partido'
import UpArrow from '../UpArrow'
import '../Nav/Nav.css'
import './Partidos.css'
import NoPartidos from '../NoPartidos/NoPartidos'
import { PartidosContext } from '../../PartidosContext'
import { useCookies } from 'react-cookie'
import { COMPARATOR_ACTIONS } from '../../reducers/comparatorReducer'

const Partidos = () => {
  const { comparatorMatches: partidos, dispatchComparatorMatches } = useContext(
    PartidosContext
  )

  const [filteredPartidos, setFilteredPartidos] = useState(partidos)
  const [lastVisit, setLastVisit] = useState('')
  const [cookies, setCookies] = useCookies(['visited-comparator-matches'])
  const [filtered, setFiltered] = useState(true)

  useEffect(() => {
    const newFilteredPartidos = filtered
      ? partidos.filter(
          (partido) =>
            partido.name === lastVisit ||
            partido.visited === false ||
            partido.visited === undefined
        )
      : partidos
    setFilteredPartidos(newFilteredPartidos)
  }, [filtered, partidos, lastVisit])

  useEffect(() => {
    const vistedPartidosCookie = cookies['visited-comparator-matches'] || []
    if (partidos.length > 0) {
      vistedPartidosCookie.length &&
        vistedPartidosCookie.forEach((match) => {
          dispatchComparatorMatches({
            type: COMPARATOR_ACTIONS.IS_VISITED,
            payload: match,
          })
        })
    }

    if(vistedPartidosCookie.length > 60) {
      setCookies('visited-comparator-matches', vistedPartidosCookie.slice(vistedPartidosCookie.length - 60, vistedPartidosCookie.length))
    }
  
  }, [cookies, setCookies, dispatchComparatorMatches, partidos.length])

  filteredPartidos.sort((a, b) => {
    const aMax = Math.max(a.percent1, a.percent2, a.percent3)
    const bMax = Math.max(b.percent1, b.percent2, b.percent3)
    return bMax - aMax
  })

  const MIN_PERCENT = 1

  return partidos.length ? (
    <>
      <nav className='partidos-nav'>
        <button onClick={() => setFiltered(!filtered)}>
          {filtered ? 'UNWATCHED' : 'ALL'}
        </button>
      </nav>
      {filteredPartidos.length ? (
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
        </div>
      ) : (
        <div>
          <NoPartidos />
        </div>
      )}
      <div className='up-arrow-container'>
        <UpArrow />
      </div>
    </>
  ) : (
    <div>
      <NoPartidos />
    </div>
  )
}

export default Partidos
