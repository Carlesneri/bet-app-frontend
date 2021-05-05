import React, { useContext, useState } from 'react'
import Partido from './Partido'
import UpArrow from '../UpArrow'
import '../Nav/Nav.css'
import './Partidos.css'
import NoPartidos from '../NoPartidos/NoPartidos'
import { PartidosContext } from '../../PartidosContext'

const Partidos = () => {
  const { comparatorMatches: partidos } = useContext(PartidosContext)

  const [lastVisit, setLastVisit] = useState('')

  // partidos.length && 
  partidos.sort((a, b) => {
    const aMax = Math.max(a.percent1, a.percent2, a.percent3)
    const bMax = Math.max(b.percent1, b.percent2, b.percent3)
    return bMax - aMax
  })
  // partidos.sort((a,b) => {
  //   if(a.visited && !b.visited) return 1
  //   return -1
  // })

  const MIN_PERCENT = 1

  return partidos.length ? (
    <div className='partidos-container'>
      <div id='Partidos' className='partidos'>
        {partidos.map((partido, index) => {
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
  ) : (
    <div>
      <NoPartidos />
    </div>
  )
}

export default Partidos
