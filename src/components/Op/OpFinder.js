import React, { Component } from 'react';
//import db from '../../database'
import PartidosOp from './PartidosOp'
import SpinnerComponent from '../SpinnerComponent/SpinnerComponent';
import NoPartidos from '../NoPartidos/NoPartidos'

//const dbTennisFinder = db.child('tennisFinder')

class OpFinder extends Component{
    constructor(){
        super()
        this.state = {
            partidos: []
        }
    }

    render(){ 
        const {partidos} = this.props
        if(partidos){
            if(partidos.length) return <PartidosOp partidos={partidos} />
            else return <NoPartidos />
        }else return <SpinnerComponent />
    }
}

export default OpFinder;