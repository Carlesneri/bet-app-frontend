import React, { Component } from 'react'
import PartidoDrop from './PartidoDrop'

class PartidosDrop extends Component{

    render(){
        const {partidos} = this.props
        partidos.sort((a, b) => 
            (b.totLocalDrop + b.totDrawDrop + b.totVisitanteDrop) -
            (a.totLocalDrop + a.totDrawDrop + a.totVisitanteDrop) 
        )
        
        return(
            <div>
                {
                partidos.map((partido, index) => {
                        return <PartidoDrop partido={partido} key={index} />
                })
                }
            </div>
        )
    }
}

export default PartidosDrop