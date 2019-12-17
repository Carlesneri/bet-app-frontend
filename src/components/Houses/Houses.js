import React, { Component } from 'react';
import PartidosHouses from '../PartidosHouses/PartidosHouses';
import db from '../../database';

const dbHouses = db.child("houses");

class Houses extends Component{

    constructor(){
        super();
        this.state = {
            partidos: []
        }

        dbHouses.on("value", snapshot => {
            const newState = [];
            snapshot.forEach( match => {
                const partido = match.val();
                //--> Calculamos cuotas Max y Min
                var localKeys = [];
                var drawKeys = [];
                var visKeys = [];

                if(partido.cuotaLocal) localKeys = Object.keys(partido.cuotaLocal);
                if(partido.cuotaDraw) drawKeys = Object.keys(partido.cuotaDraw);
                if(partido.cuotaVisitante) visKeys = Object.keys(partido.cuotaVisitante);

                const subsCuotas = (player, keys) => {
                    const cuotas = keys.map( house => 
                        partido[player][house].cuotaAct
                        )
                    const cuotaMax = Math.max(...cuotas)
                    const cuotaMin = Math.min(...cuotas)
                    return Math.abs(Math.floor((1/cuotaMax - 1/cuotaMin)*1000)/10);
                }
                
                const subsCuotaLocal = subsCuotas("cuotaLocal", localKeys);
                const subsCuotaDraw = subsCuotas("cuotaDraw", drawKeys);
                const subsCuotaVis = subsCuotas("cuotaVisitante", visKeys);
                partido.subsCuotaLocal = subsCuotaLocal;
                partido.subsCuotaDraw = subsCuotaDraw;
                partido.subsCuotaVis = subsCuotaVis;

                newState.push(partido);
            });  
            this.setState({ partidos: newState });
        });
    }

    render(){
        const { partidos } = this.state;

        partidos.sort((a, b) => {
            const aMax = Math.max(a.subsCuotaLocal, a.subsCuotaDraw, a.subsCuotaVis);
            const bMax = Math.max(b.subsCuotaLocal, b.subsCuotaDraw, b.subsCuotaVis);
            return bMax - aMax;
          })
      
        
        if(partidos){
            return <PartidosHouses partidos={partidos} />
        }else return <><h1>No hay partidos que mostrar</h1></>
    }
}

export default Houses;
