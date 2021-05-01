import React, { useContext } from 'react'
import Partido from './Partido'
import UpArrow from '../UpArrow'
import '../Nav/Nav.css'
import './Partidos.css'
import NoPartidos from '../NoPartidos/NoPartidos'
import { PartidosContext } from '../../PartidosContext'

const Partidos = () => {
  const { comparatorMatches: partidos } = useContext(PartidosContext)

  partidos.length && partidos.sort((a, b) => {
    const aMax = Math.max(a.percent1, a.percent2, a.percent3)
    const bMax = Math.max(b.percent1, b.percent2, b.percent3)
    return bMax - aMax
  })

  const MIN_PERCENT = 1

  if (partidos.length) {
    return (
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
                />
              )
            } else return null
          })}
        </div>
        <div className='up-arrow-container'>
          <UpArrow />
        </div>
      </div>
    )
  } else
    return (
      <div>
        <NoPartidos />
      </div>
    )
}

export default Partidos
