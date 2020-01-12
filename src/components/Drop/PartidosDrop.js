import React, { Component } from 'react'
import PartidoDrop from './PartidoDrop'

class PartidosDrop extends Component{

    render(){
        const {partidos} = this.props
        //--> Damos formato a los partidos
        const formatPartidos = partidos.map(partido => {
            const cuotaLocalKeys = Object.keys(partido.cuotaLocal) 
            const cuotaDrawKeys = Object.keys(partido.cuotaDraw) 
            const cuotaVisitanteKeys = Object.keys(partido.cuotaVisitante) 
            const {local, visitante, url, matchTime} = partido
            const cuotasLocal = []
            const cuotasDraw = []
            const cuotasVisitante = []
            for(let key in cuotaLocalKeys){
                const keyValue = cuotaLocalKeys[key]
                let cuota = partido.cuotaLocal[keyValue].cuota
                cuota = Math.round(cuota * 100)/100
                const time = partido.cuotaLocal[keyValue].time
                if(!isNaN(cuota) && cuota > 0) cuotasLocal.push({cuota, time})
            }
            for(let key in cuotaDrawKeys){
                const keyValue = cuotaDrawKeys[key]
                let cuota = partido.cuotaDraw[keyValue].cuota
                cuota = Math.round(cuota * 100)/100
                const time = partido.cuotaDraw[keyValue].time
                if(!isNaN(cuota) && cuota > 0) cuotasDraw.push({cuota, time})
            }
            for(let key in cuotaVisitanteKeys){
                const keyValue = cuotaVisitanteKeys[key]
                let cuota = partido.cuotaVisitante[keyValue].cuota
                cuota = Math.round(cuota * 100)/100
                const time = partido.cuotaVisitante[keyValue].time
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
            
            return partido = {local, visitante, url, matchTime, cuotasLocal, cuotasDraw, cuotasVisitante, localDrop, drawDrop, visitanteDrop, totLocalDrop, totDrawDrop, totVisitanteDrop}
        })
        //--> Ordenamos partidos formateados
        formatPartidos.sort((a, b) => 
            (b.totLocalDrop + b.totDrawDrop + b.totVisitanteDrop) -
            (a.totLocalDrop + a.totDrawDrop + a.totVisitanteDrop) 
        )

        return(
            <div>
                {
                    formatPartidos.map((partido, index) => {
                        if(partido.totLocalDrop + partido.totDrawDrop + partido.totVisitanteDrop > 0){
                            return <PartidoDrop partido={partido} key={index} />
                        }else return null
                    })
                }
            </div>
        )
    }
}

export default PartidosDrop