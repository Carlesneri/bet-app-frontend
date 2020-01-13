import React, { Component } from 'react';
import db from '../../database'
import PartidosDrop from './PartidosDrop'

const dbPinnacle = db.child('pinnacle')

class Drop extends Component{
    constructor(){
        super()
        this.state = {
            partidos: []
        }
        dbPinnacle.on("value", partidos => {
            const newState = {
                partidos: []
            }
            partidos.forEach(partido => {
                partido = partido.val()    
                //--> Damos formato a los partidos            
                let cuotasLocal, cuotasDraw, cuotasVisitante, cuotaLocalKeys, cuotaDrawKeys, cuotaVisitanteKeys
                cuotasLocal = []
                cuotasDraw = [] 
                cuotasVisitante = [] 
                cuotaLocalKeys = []
                cuotaDrawKeys = [] 
                cuotaVisitanteKeys = []
                
                if(partido.cuotaLocal) cuotaLocalKeys = Object.keys(partido.cuotaLocal)                 
                if(partido.cuotaDraw) cuotaDrawKeys = Object.keys(partido.cuotaDraw) 
                if(partido.cuotaVisitante) cuotaVisitanteKeys = Object.keys(partido.cuotaVisitante) 
                const {local, visitante, url, matchTime} = partido
                for(let key in cuotaLocalKeys){
                    let keyValue = cuotaLocalKeys[key]
                    let cuota = partido.cuotaLocal[keyValue].cuota
                    cuota = Math.round(cuota * 100)/100
                    let time = partido.cuotaLocal[keyValue].time
                    if(!isNaN(cuota) && cuota > 0) cuotasLocal.push({cuota, time})                    
                }
                for(let key in cuotaDrawKeys){
                    let keyValue = cuotaDrawKeys[key]
                    let cuota = partido.cuotaDraw[keyValue].cuota
                    cuota = Math.round(cuota * 100)/100
                    let time = partido.cuotaDraw[keyValue].time
                    if(!isNaN(cuota) && cuota > 0) cuotasDraw.push({cuota, time})
                }
                for(let key in cuotaVisitanteKeys){
                    let keyValue = cuotaVisitanteKeys[key]
                    let cuota = partido.cuotaVisitante[keyValue].cuota
                    cuota = Math.round(cuota * 100)/100
                    let time = partido.cuotaVisitante[keyValue].time
                    if(!isNaN(cuota) && cuota > 0) cuotasVisitante.push({cuota, time})
                }            
                const localDrop = []
                const drawDrop = []
                const visitanteDrop = []
                for(let i = 0; i < cuotasLocal.length - 1; i++){
                    let drop = Math.round((1/cuotasLocal[i + 1].cuota - 1/cuotasLocal[i].cuota) * 10000)/100
                    !isNaN(drop) ? localDrop.push(drop) : localDrop.push(0)
                }
                for(let i = 0; i < cuotasDraw.length - 1; i++){
                    let drop = Math.round((1/cuotasDraw[i + 1].cuota - 1/cuotasDraw[i].cuota) * 10000)/100
                    !isNaN(drop) ? drawDrop.push(drop) : drawDrop.push(0)
                }
                for(let i = 0; i < cuotasVisitante.length - 1; i++){
                    let drop = Math.round((1/cuotasVisitante[i + 1].cuota - 1/cuotasVisitante[i].cuota) * 10000)/100
                    !isNaN(drop) ? visitanteDrop.push(drop) : visitanteDrop.push(0)
                }    
                let totLocalDrop, totDrawDrop, totVisitanteDrop
                localDrop.length > 1 ? 
                    totLocalDrop = localDrop.reduce((a,b) => Math.abs(a) + Math.abs(b)) : 
                    totLocalDrop = 0
                drawDrop.length > 1 ?
                    totDrawDrop = drawDrop.reduce((a,b) => Math.abs(a) + Math.abs(b)) :
                    totDrawDrop = 0
                visitanteDrop.length > 1 ?
                    totVisitanteDrop = visitanteDrop.reduce((a,b) => Math.abs(a) + Math.abs(b)):
                    totVisitanteDrop = 0
                
                if(totLocalDrop + totDrawDrop + totVisitanteDrop > 0)
                    newState
                    .partidos
                    .push({
                        local, visitante, url, matchTime, cuotasLocal, cuotasDraw, cuotasVisitante, localDrop, drawDrop, visitanteDrop, totLocalDrop, totDrawDrop, totVisitanteDrop
                    })
            })
            this.setState(newState)
        }) 
    }

    render(){ 
        const {partidos} = this.state
        return <PartidosDrop partidos={partidos} />        
    }
}

export default Drop;