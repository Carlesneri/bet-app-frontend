import React, { Component } from 'react'
import PartidoTennis from './PartidoTennis'
import NoPartidos from '../NoPartidos/NoPartidos'
import UpArrow from '../UpArrow/UpArrow';
import './PartidosTennis.css'

class PartidosTennis extends Component{
    
    render(){
        const {partidos} = this.props
        if(partidos.length){
            //     const partidosDrop = partidos.map(partido => {
        //         const {cuotaLocal, cuotaDraw, cuotaVisitante} = partido
        //         const localDrop = []
        //         const drawDrop = []
        //         const visitanteDrop = []
        //         for(let i = 0; i < cuotaLocal.length - 1; i++){
        //             let drop = Math.round((1/cuotaLocal[i + 1] - 1/cuotaLocal[i]) * 10000)/100 
        //             localDrop.push(drop)
        //         }
        //         for(let i = 0; i < cuotaDraw.length - 1; i++){
        //             let drop = Math.round((1/cuotaDraw[i + 1] - 1/cuotaDraw[i]) * 10000)/100
        //             drawDrop.push(drop)
        //         }
        //         for(let i = 0; i < cuotaVisitante.length - 1; i++){
        //             let drop = Math.round((1/cuotaVisitante[i + 1] - 1/cuotaVisitante[i]) * 10000)/100
        //             visitanteDrop.push(drop)
        //         }    
        //         let totLocalDrop = 0, 
        //             totDrawDrop = 0, 
        //             totVisitanteDrop = 0
        //         localDrop.length > 1 ? 
        //             totLocalDrop = Math.abs(localDrop.reduce((a,b) => a + b))
        //             : totLocalDrop = 0
        //         drawDrop.length > 1 ?
        //             totDrawDrop = Math.abs(drawDrop.reduce((a,b) => a + b)) 
        //             : totDrawDrop = 0
        //         visitanteDrop.length > 1 ?
        //             totVisitanteDrop = Math.abs(visitanteDrop.reduce((a,b) => a + b))
        //             : totVisitanteDrop = 0
    
        //          return partido = {
        //             ...partido, 
        //             localDrop, 
        //             drawDrop, 
        //             visitanteDrop, 
        //             totLocalDrop, 
        //             totDrawDrop, 
        //             totVisitanteDrop
        //         }            
        //     })
    
            partidos.sort((a, b) => 
                (Math.max(b.player1.player1Coef/b.player1.player1Matches, b.player2.player2Coef/b.player2.player2Matches)) -
                (Math.max(a.player1.player1Coef/a.player1.player1Matches, a.player2.player2Coef/a.player2.player2Matches)) 
            )

            return(
                <div className="partidos-drop-container">
                    <div className="partidos-drop partidos-tennis">
                        {
                        partidos.map((partido, index) => {
                            return <PartidoTennis partido={partido} key={index} />
                        })
                        }
                    </div>
                    <div className="up-arrow-container">
                        <UpArrow />
                    </div>
                </div>
            )
        }else return <NoPartidos />
    }
}

export default PartidosTennis