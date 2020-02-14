import React, { Component } from "react";
import Partidos from "./Partidos";
import NoPartidos from '../NoPartidos/NoPartidos'
import SpinnerComponent from "../SpinnerComponent/SpinnerComponent";
// import db  from "../../database";

// const dbOP = db.child("oddsportal");

class OddsportalDrop extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     partidos: []
  //   };

  // }
  // componentDidMount(){
  //   dbOP.on("value", snap => {
  //     const newState = {
  //       partidos: []
  //     };
  //     if(snap.val()){
  //       snap.forEach(match => {
  //         const aver1 = [];
  //         const aver2 = [];
  //         const aver3 = [];
  //         const high1 = [];
  //         const high2 = [];
  //         const high3 = [];
  //         let percent1 = 0;
  //         let percent2 = 0;
  //         let percent3 = 0;
  //         const name = match.val().name;
  //         const url = match.val().url;
  //         const last = match.val().last;
  //         dbOP.child(name + "/aver1").once("value", snapChild => {
  //           snapChild.forEach(data => {
  //             const cuota = data.val().cuota;
  //             const time = data.val().time;
  //             aver1.push({ cuota, time });
  //           });
  //         });
  //         dbOP.child(name + "/aver2").once("value", snapChild => {
  //           snapChild.forEach(data => {
  //             const cuota = data.val().cuota;
  //             const time = data.val().time;
  //             aver2.push({ cuota, time });
  //           });
  //         });
  //         dbOP.child(name + "/aver3").once("value", snapChild => {
  //           snapChild.forEach(data => {
  //             const cuota = data.val().cuota;
  //             const time = data.val().time;
  //             aver3.push({ cuota, time });
  //           });
  //         });
  //         dbOP.child(name + "/high1").once("value", snapChild => {
  //           snapChild.forEach(data => {
  //             const cuota = data.val().cuota;
  //             const time = data.val().time;
  //             high1.push({ cuota, time });
  //           });
  //         });
  //         dbOP.child(name + "/high2").once("value", snapChild => {
  //           snapChild.forEach(data => {
  //             const cuota = data.val().cuota;
  //             const time = data.val().time;
  //             high2.push({ cuota, time });
  //           });
  //         });
  //         dbOP.child(name + "/high3").once("value", snapChild => {
  //           snapChild.forEach(data => {
  //             const cuota = data.val().cuota;
  //             const time = data.val().time;
  //             high3.push({ cuota, time });
  //           });
  //         });
  
  //         percent1 = this.getPercent(aver1, high1).toString();
  //         percent2 = this.getPercent(aver2, high2).toString();
  //         percent3 = this.getPercent(aver3, high3).toString();
  
  //         newState.partidos.push({
  //           name,
  //           url,
  //           last,
  //           aver1,
  //           aver2,
  //           aver3,
  //           high1,
  //           high2,
  //           high3,
  //           percent1,
  //           percent2,
  //           percent3
  //         });
  //       });
  //     }else newState.partidos = null
  //     this.setState(newState);
  //   });
  // }
  // componentWillUnmount(){
  //   dbOP.off();
  // }
  // getPercent(aver, high) {
  //   const lastAverI = aver.length - 1;
  //   const lastHighI = high.length - 1;
  //   const averCuota = aver[lastAverI] ? aver[lastAverI].cuota : 1;
  //   const highCuota = high[lastHighI] ? high[lastHighI].cuota : 1;
  //   return Math.round(1000 * -1 * (1 / highCuota - 1 / averCuota)) / 10;
  // }

  render() {
    const {partidos} = this.props;
    if(partidos){
      if(partidos.length){
        partidos.sort((a, b) => {
          const aMax = Math.max(a.percent1, a.percent2, a.percent3);
          const bMax = Math.max(b.percent1, b.percent2, b.percent3);
          return bMax - aMax;
        })
        return <Partidos partidos={partidos} />
      } 
      else return <NoPartidos />
    }else return <SpinnerComponent />
  }
}

export default OddsportalDrop;
