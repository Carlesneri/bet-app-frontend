import firebase from "firebase/app";
import { DB_CONFIG } from "./config/config";
import "firebase/database";

const app = firebase.initializeApp(DB_CONFIG);
export const db = app.database().ref()

export function getOddsPortalPartidos(stateSetter){
  const dbOP = db.child('oddsportal')
  dbOP.on("value", snapshot =>{     
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

        const name = match.val().name;
        const url = match.val().url;
        const last = match.val().last;

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
        
        // dbOP.child(name + "/aver1").once("value", snapChild => {
        // });
        // dbOP.child(name + "/aver2").once("value", snapChild => {
        //   snapChild.forEach(data => {
        //     const cuota = data.val().cuota;
        //     const time = data.val().time;
        //     aver2.push({ cuota, time });
        //   });
        // });
        // dbOP.child(name + "/aver3").once("value", snapChild => {
        //   snapChild.forEach(data => {
        //     const cuota = data.val().cuota;
        //     const time = data.val().time;
        //     aver3.push({ cuota, time });
        //   });
        // });
        // dbOP.child(name + "/high1").once("value", snapChild => {
        //   snapChild.forEach(data => {
        //     const cuota = data.val().cuota;
        //     const time = data.val().time;
        //     high1.push({ cuota, time });
        //   });
        // });
        // dbOP.child(name + "/high2").once("value", snapChild => {
        //   snapChild.forEach(data => {
        //     const cuota = data.val().cuota;
        //     const time = data.val().time;
        //     high2.push({ cuota, time });
        //   });
        // });
        // dbOP.child(name + "/high3").once("value", snapChild => {
        //   snapChild.forEach(data => {
        //     const cuota = data.val().cuota;
        //     const time = data.val().time;
        //     high3.push({ cuota, time });
        //   });
        // });     
        
        percent1 = getPercent(aver1, high1).toString();
        percent2 = getPercent(aver2, high2).toString();
        percent3 = getPercent(aver3, high3).toString();
        
        partidosOP.push({
          name,
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
    stateSetter({partidosOP})
  })
  
  function getPercent(aver, high) {
    const lastAverI = aver.length - 1;
    const lastHighI = high.length - 1;
    const averCuota = aver[lastAverI] ? aver[lastAverI].cuota : 1;
    const highCuota = high[lastHighI] ? high[lastHighI].cuota : 1;
    return Math.round(1000 * -1 * (1 / highCuota - 1 / averCuota)) / 10;
  }  
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



