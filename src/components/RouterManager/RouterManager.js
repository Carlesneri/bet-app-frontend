import React, { Component } from 'react'
import Home from '../Home/Home';
import OddsportalDrop from '../OddsportalDrop/OddsportalDrop';
import Drop from '../Drop/Drop'
import TennisFinder from '../Tennis/TennisFinder'
import OpFinder from '../Op/OpFinder'


class RouterManager extends Component{
 
  render(){
    const {component, partidos} = this.props
    
    let homeDisplay, comparatorDisplay, dropDisplay, tennisDisplay, opDisplay
    const {partidosOP, drop, tennis, op} = partidos
  
    homeDisplay = comparatorDisplay = dropDisplay = tennisDisplay = opDisplay = {display: 'none'}
    const activeComponent = {display: 'block'}
    switch(component){
      case 'home': 
        homeDisplay = activeComponent
        break
        case 'comparator':
          comparatorDisplay = activeComponent
          break
        case 'drop':
          dropDisplay = activeComponent
          break
        case 'tennis':
          tennisDisplay = activeComponent
          break
        case 'op':
          opDisplay = activeComponent
          break
      default: break
    }
  
    return( 
      <>
        <div style={homeDisplay}>
          <Home />
        </div>
        <div style={comparatorDisplay}>
          <OddsportalDrop partidosOP={partidosOP} op={op}/>
        </div>
        <div style={dropDisplay}>
          <Drop partidos={drop} />
        </div>
        <div style={tennisDisplay}>
          <TennisFinder partidos={tennis} />
        </div>
        <div style={opDisplay}>
          <OpFinder partidos={op} />
        </div>
      </>
    )
  }
}

export default RouterManager;