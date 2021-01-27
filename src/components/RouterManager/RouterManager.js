import React, { Component } from 'react'
import Home from '../Home/Home';
import OddsportalDrop from '../OddsportalDrop/OddsportalDrop';
import Drop from '../Drop/Drop'
// import TennisFinder from '../Tennis/TennisFinder'
import OpFinder from '../Op/OpFinder'
import LastMatches from '../LastMatches'


class RouterManager extends Component{
 
  render(){
    const {component, partidos} = this.props
    const {partidosOP, drop, op, newMatchesPinnacle} = partidos
    let homeDisplay, comparatorDisplay, dropDisplay, opDisplay, lastDisplay
    homeDisplay = comparatorDisplay = dropDisplay = opDisplay = lastDisplay = {display: 'none'}
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
        // case 'tennis':
        //   tennisDisplay = activeComponent
        //   break
        case 'op':
          opDisplay = activeComponent
          break
        case 'last':
          lastDisplay = activeComponent
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
        {/* <div style={tennisDisplay}>
          <TennisFinder partidos={tennis} />
        </div> */}
        <div style={opDisplay}>
          <OpFinder partidos={op} />
        </div>
        <div style={lastDisplay}>
          <LastMatches state={newMatchesPinnacle} />
        </div>
      </>
    )
  }
}

export default RouterManager;