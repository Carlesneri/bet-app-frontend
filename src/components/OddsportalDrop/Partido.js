import React, { useState, useEffect, useCallback } from 'react'
import './Partido.css'
import AverHighRow from './AverHighRow'
import { getTeamData } from '../../database'
import { setCoefColor as setCoefColorUtil } from '../../utils'


function Partido({ partido }) {
  const NUM_CUOTAS = 8

  // console.log(partido)

  let {
    aver1,
    aver2,
    aver3,
    high1,
    high2,
    high3,
    name,
    player1,
    player2,
    url,
    sport,
    last,
    percent1,
    percent2,
    percent3,
  } = partido

  // const { partidoOp } = partido

  const filter = useCallback((array, NUM_CUOTAS) => {
    if (!array) return 1;
    else return array.filter((data, index) =>
    array.length - index < NUM_CUOTAS
    )
  }, [])

  const setCoefColor = useCallback(setCoefColorUtil, [])


//   function filter(array, NUM_CUOTAS){
//   if (!array) return 1;
//   else return array.filter((data, index) =>
//   array.length - index < NUM_CUOTAS
//   )
// }


  //-->Obtenemos datos de la url
  const urlSplit = url.split('/')
  let i = urlSplit.length
  const game = urlSplit[i - 5]
  const country = urlSplit[i - 4]
  const tournament = urlSplit[i - 3].replace(/-/g, ' ')

  aver1 = filter(aver1, NUM_CUOTAS)
  aver2 = filter(aver2, NUM_CUOTAS)
  aver3 = filter(aver3, NUM_CUOTAS)
  high1 = filter(high1, NUM_CUOTAS)
  high2 = filter(high2, NUM_CUOTAS)
  high3 = filter(high3, NUM_CUOTAS)

  const minutesAgo = ((Date.now() - last) / (1000 * 60)).toFixed(1)
  const minAgoText = minutesAgo + ' min. ago'

  const bgAlpha = 1 - minutesAgo / 60

  const titleStyle = {
    backgroundColor: `rgba(0, 100, 0, ${bgAlpha})`,
  }

  // const minutesAgoStyle = {opacity: 2 / (minutesAgo + 1)}

  const [team1Data, setTeam1Data] = useState({})
  const [team2Data, setTeam2Data] = useState({})

  useEffect(() => {
    getTeamData(sport, player1, setTeam1Data)
    getTeamData(sport, player2, setTeam2Data)
  }, [sport, player1, player2])

  // const {index} = this.props
  // //-->Parpadeo segundos
  // const parpadeoEl = document.getElementById(index)
  // const parpadeo = element => {
  //   //parpadeoEl.classList.add('parpadeo')
  //   element.innerText = ''
  //   setTimeout(() => element.innerText = '"', 1000)
  // }
  // if(parpadeoEl) {
  //   setInterval(parpadeo(parpadeoEl), 2000)
  // }

  return (
    <div className='partido card-bg'>
      <div className='partido-title-op' style={titleStyle}>
        <div className='partido-name-op'>
          <a href={url} target='_blank' rel='nofollow noopener noreferrer'>
            {name}
          </a>
        </div>
        <div className='min-ago-group'>
          <span title={minAgoText} className='min-ago-text'>
            {minutesAgo}
          </span>
          <span>"</span>
        </div>
      </div>
      <hr />
      <div className='partido-body'>
        <div className='partido-data'>
          <span>{game}</span>
          <span> - </span>
          <span>{country}</span>
          <span> - </span>
          <span>{tournament}</span>
        </div>
        <div className='aver-high-rows'>
          <AverHighRow aver={aver1} high={high1} percent={percent1} />
          <AverHighRow aver={aver2} high={high2} percent={percent2} />
          <AverHighRow aver={aver3} high={high3} percent={percent3} />
        </div>
        {(team1Data || team2Data) && (
          <div className='partido-op'>
            {team1Data && (
              <span>
                QLocal: 
                <span style={{color: setCoefColor(team1Data.coef)}}>
                  {team1Data.coef && team1Data.coef.toFixed(2)} ({team1Data.numOfMatches})
                </span>
              </span>
            )}
            {team2Data && (
              <span>
                QVisitante: 
                <span style={{color: setCoefColor(team2Data.coef)}}>
                  {team2Data.coef && team2Data.coef.toFixed(2)} ({team2Data.numOfMatches})
                </span>
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Partido
