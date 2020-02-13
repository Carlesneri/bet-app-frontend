import React, { Component } from 'react'
import Home from '../Home/Home';
import OddsportalDrop from '../OddsportalDrop/OddsportalDrop';
import Drop from '../Drop/Drop'
import TennisFinder from '../Tennis/TennisFinder'


class RouterManager extends Component{
 
  render(){
    const {component, partidos} = this.props
    
    let homeDisplay, comparatorDisplay, dropDisplay, tennisDisplay
    const {partidosOP, drop, tennis} = partidos
  
    homeDisplay = comparatorDisplay = dropDisplay = tennisDisplay = {display: 'none'}
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
      default: break
    }
  
    return( 
      <>
        <div style={homeDisplay}>
          <Home />
        </div>
        <div style={comparatorDisplay}>
          <OddsportalDrop partidos={partidosOP} />
        </div>
        <div style={dropDisplay}>
          <Drop partidos={drop} />
        </div>
        <div style={tennisDisplay}>
          <TennisFinder partidos={tennis} />
        </div>
      </>
    )
  }
}

export default RouterManager;