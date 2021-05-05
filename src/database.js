import { MATCHES_ACTIONS } from "./reducers/matchesReducer";
import { COMPARATOR_ACTIONS } from "./reducers/comparatorReducer";
// import { TEAMS_ACTIONS } from "./reducers/teamsReducer";
import {db} from './index'

export function getMatches(dispatch){
  const dbOP = db.child('matches')
  dbOP.on("value", snapshot =>{    
    const matches = []
    snapshot.forEach(el => {
      matches.push(el.val())
    })
    // console.log(matches);
    dispatch({ type: MATCHES_ACTIONS.ADD, payload: matches })
  })
}

export function getOddsPortalPartidos(dispatch){
  const dbOP = db.child('oddsportal')
  dbOP.on("value", snapshot =>{     
    // console.log('getOddsPortalPartidos')
    let partidosOP = []
    if(snapshot.val()){
      snapshot.forEach(match => {
        let aver1 = [];
        let aver2 = [];
        let aver3 = [];
        let high1 = [];
        let high2 = [];
        let high3 = [];
        let percent1 = 0;
        let percent2 = 0;
        let percent3 = 0;

        const name = match.val().name
        const url = match.val().url
        const last = match.val().last
        const sport = match.val().sport
        const player1 = match.val().player1
        const player2 = match.val().player2

        if(match.val().aver1){
          const aver1Keys = Object.keys(match.val().aver1)
          aver1 = aver1Keys.map(key => {
            const cuota = match.val().aver1[key].cuota;
            const time = match.val().aver1[key].time;
            return ({cuota, time})
          });
        }
        if(match.val().aver2){
          const aver2Keys = Object.keys(match.val().aver2)
          aver2 = aver2Keys.map(key => {
            const cuota = match.val().aver2[key].cuota;
            const time = match.val().aver2[key].time;
            return ({cuota, time})
          });
        }
        if(match.val().aver3){
          const aver3Keys = Object.keys(match.val().aver3)
          aver3 = aver3Keys.map(key => {
            const cuota = match.val().aver3[key].cuota;
            const time = match.val().aver3[key].time;
            return ({cuota, time})
          });
        }
        if(match.val().high1){
          const high1Keys = Object.keys(match.val().high1)
          high1 = high1Keys.map(key => {
            const cuota = match.val().high1[key].cuota;
            const time = match.val().high1[key].time;
            return ({cuota, time})
          });
        }
        if(match.val().high2){
          const high2Keys = Object.keys(match.val().high2)
          high2 = high2Keys.map(key => {
            const cuota = match.val().high2[key].cuota;
            const time = match.val().high2[key].time;
            return ({cuota, time})
          });
        }
        if(match.val().high3){
          const high3Keys = Object.keys(match.val().high3)
          high3 = high3Keys.map(key => {
            const cuota = match.val().high3[key].cuota;
            const time = match.val().high3[key].time;
            return ({cuota, time})
          });
        }
                
        percent1 = getPercent(aver1, high1).toString();
        percent2 = getPercent(aver2, high2).toString();
        percent3 = getPercent(aver3, high3).toString();
        
        partidosOP.push({
          name,
          sport,
          player1,
          player2,
          url,
          last,
          aver1,
          aver2,
          aver3,
          high1,
          high2,
          high3,
          percent1,
          percent2,
          percent3
        })
      })
    }

    dispatch({type: COMPARATOR_ACTIONS.ADD, payload: partidosOP })
  })

  function getPercent(aver, high) {
    const lastAverI = aver.length - 1;
    const lastHighI = high.length - 1;
    const averCuota = aver[lastAverI] ? aver[lastAverI].cuota : 1;
    const highCuota = high[lastHighI] ? high[lastHighI].cuota : 1;
    return Math.round(1000 * -1 * (1 / highCuota - 1 / averCuota)) / 10;
  }  
}

export function getPlayers(stateSetter) {
  const dbOP = db.child('players')
  dbOP.on("value", snapshot =>{    
    const players = []
    snapshot.forEach(el => {
      players.push(el.val())
    })
    stateSetter(players)
  })
}

export function getPlayerData(playerName, stateSetter) {
  db.child(`players/${playerName}`).once("value", snapshot => {
    stateSetter(snapshot.val())
  })
}

export function getTeamData(sport, player, stateSetter) {
  db.child(`teams/${sport}/${player}`)
  .once("value", snapshot => {
    // console.log(snapshot.val())
    // --> Guardar en estado global
    stateSetter(snapshot.val())
  })
}

export function getPercent(aver, high) {
  return Math.round(1000 * -1 * (1 / high - 1 / aver)) / 10
}  


export function getDropPartidos(stateSetter){
  const dbPinnacle = db.child('pinnacle')
  dbPinnacle.on("value", snapshot => {
    let drop= []
    if(snapshot.val()){
      snapshot.forEach(partido => {
        partido = partido.val()    
        drop.push(partido)
      })
    }
    stateSetter({drop})
  })
}

export function getTennisPartidos(stateSetter){
  const dbTennisFinder = db.child('tennisFinder')
  dbTennisFinder.on("value", snapshot => {
    let tennis = []
    if(snapshot.val()){
      snapshot.forEach(partido => {
        partido = partido.val() 
        tennis.push(partido)   
      })
    }
    stateSetter({tennis})
  })
}

export function getOpPartidos(stateSetter){
  const dbOpFinder = db.child('opFinder')
  dbOpFinder.on("value", snapshot => {
    let op = []
    if(snapshot.val()){
      snapshot.forEach(partido => {
        partido = partido.val() 
        op.push(partido)   
      })
    }
    stateSetter({op})
  })
}

export function getNewMatchesPinnacle(stateSetter){
  const dbNewMatchesPinnacle = db.child('newMatchesPinnacle')
  dbNewMatchesPinnacle.on('value', snapshot => {
    let newMatchesPinnacle = []
    if(snapshot.val()) {
      snapshot.forEach(partido => {
        newMatchesPinnacle.push(partido.val())
      })
      newMatchesPinnacle = newMatchesPinnacle.sort((a, b) => {
        return b.last - a.last
      })
      stateSetter({ newMatchesPinnacle })
    }
  })
}



