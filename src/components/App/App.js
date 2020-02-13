import React, { Component } from "react";
import { Switch, Route, HashRouter } from 'react-router-dom';
import Nav from '../Nav/Nav'
import RouterManager from '../RouterManager/RouterManager';
import Alerts from '../Alerts/Alerts'
import "./App.css";
import {db, getOddsPortalPartidos, getDropPartidos, getTennisPartidos} from '../../database'


class App extends Component {
  
  constructor(){
    super()
    this.state = {
      partidosOP: [],
      drop: [],
      tennis: []
    }
  }

  
  componentDidMount(){
    const stateSetter = state => this.setState(state)
    getOddsPortalPartidos(stateSetter)
    getDropPartidos(stateSetter)
    getTennisPartidos(stateSetter)
    
  }
  
  
  // getOddsPortalPartidos(){
    //   const dbOP = db.child('oddsportal')
    //   dbOP.on("value", snap =>{      
      //     const newState = {
        //       partidosOP: [],
        //       alerts: []
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
                                    
                                    //         percent1 = getPercent(aver1, high1).toString();
                                    //         percent2 = getPercent(aver2, high2).toString();
                                    //         percent3 = getPercent(aver3, high3).toString();
                                    
                                    //         newState.partidosOP.push({
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
                                      //     const alerts = this.getOPAlerts(newState.partidosOP)
                                      //     newState.alerts = alerts
                                      //     this.setState(newState);
                                      //   })
                                      
                                      //   function getPercent(aver, high) {
                                        //     const lastAverI = aver.length - 1;
                                        //     const lastHighI = high.length - 1;
                                        //     const averCuota = aver[lastAverI] ? aver[lastAverI].cuota : 1;
                                        //     const highCuota = high[lastHighI] ? high[lastHighI].cuota : 1;
                                        //     return Math.round(1000 * -1 * (1 / highCuota - 1 / averCuota)) / 10;
                                        //   }  
                                        // }
                                        
  // getDropPartidos(stateSetter){
  //   const dbPinnacle = db.child('pinnacle')
  //   dbPinnacle.on("value", snapshot => {
  //     if(snapshot.val()){
  //       const drop= []
  //       snapshot.forEach(partido => {
  //         partido = partido.val()    
  //         drop.push(partido)
  //       })
  //       stateSetter({drop})
  //     }
  //   })
  // }

  // getTennisPartidos(stateSetter){
  //   const dbTennisFinder = db.child('tennisFinder')
  //   dbTennisFinder.on("value", snapshot => {
  //     const newState = {
  //       tennis: []
  //     }
  //     if(snapshot.val()){
  //       const tennis = []
  //       snapshot.forEach(partido => {
  //         partido = partido.val() 
  //         tennis.push(partido)   
  //         //newState.tennis.push(partido)
  //       })
  //       stateSetter({tennis})
  //       //this.setState(newState)
  //     }//else newState.tennis = null
  //   })
  // }

  // getOPAlerts(partidosOP){    
  //   const alerts = this.state.alerts;
  //   partidosOP.forEach(partido => {
    //     const stringifyPartido = JSON.stringify(partido)      
    //     if(alerts.indexOf(stringifyPartido) === -1){
      //       const getPercent = Math.max(partido.percent1, partido.percent2, partido.percent3)
      //       if(getPercent > 6) alerts.push(stringifyPartido)
      //     }else console.log('Ya existe alerta OP');
      
      //   })
      //   return alerts;
      // }
      
  // getDropAlerts(partidosDrop){
  //   const MIN_DROP_ALERT = 5
  //   const alerts = this.state.alerts
  //   partidosDrop.forEach(partido => {
  //     const stringifyPartido = JSON.stringify(partido)
  //     if(alerts.indexOf(stringifyPartido) === -1){
  //       const cuotaLocalLast = partido.cuotaLocal[partido.cuotaLocal.length - 1]
  //       const cuotaLocalAnt = partido.cuotaLocal[partido.cuotaLocal.length - 2]
  //       let dropLocal = Math.round((1/cuotaLocalLast - 1/cuotaLocalAnt) * 10000)/100       
  //       const cuotaDrawLast = partido.cuotaDraw[partido.cuotaDraw.length - 1]
  //       const cuotaDrawAnt = partido.cuotaDraw[partido.cuotaDraw.length - 2]
  //       let dropDraw = Math.round((1/cuotaDrawLast - 1/cuotaDrawAnt) * 10000)/100       
  //       const cuotaVisitanteLast = partido.cuotaVisitante[partido.cuotaVisitante.length - 1]
  //       const cuotaVisitanteAnt = partido.cuotaVisitante[partido.cuotaVisitante.length - 2]
  //       let dropVisitante = Math.round((1/cuotaVisitanteLast - 1/cuotaVisitanteAnt) * 10000)/100       
  //       const dropMax = Math.max(dropLocal, dropDraw, dropVisitante)
  //       if(dropMax > MIN_DROP_ALERT){
  //         alerts.push(stringifyPartido)
  //       } 
  //     }else console.log('Ya existe alerta Drop');
      
  //   })    
  //   return alerts        
  // }
  
  render() {
    return (
      <HashRouter>
        <Nav />
        <div className="body-layout">
          <div className="switch-routes">
            <Switch>
              <Route path='/' exact>
                <RouterManager component='home' partidos={this.state}/>  
              </Route> 
              <Route path='/comparator'>
                <RouterManager component='comparator' partidos={this.state} />  
              </Route> 
              <Route path='/drop'>
                <RouterManager component='drop' partidos={this.state} />  
              </Route> 
              <Route path='/tennis'>
                <RouterManager component='tennis' partidos={this.state} />  
              </Route>
            </Switch>
          </div>
          <div className="right-bar">
            <div className="alerts">
              <Alerts alerts={this.state} />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
