import React from 'react'
import Home from '../Home/Home'
import Matches from '../Matches/index'
import OddsportalDrop from '../OddsportalDrop/OddsportalDrop'
// import Drop from "../Drop/Drop";
// import TennisFinder from '../Tennis/TennisFinder'
// import OpFinder from "../Op/OpFinder";
// import LastMatches from "../LastMatches";

const RouterManager = ({ component }) => {
  let homeDisplay, matchesDisplay, comparatorDisplay
  homeDisplay = matchesDisplay = comparatorDisplay = {
    display: 'none',
  }
  const activeComponent = { display: 'block' }

  switch (component) {
    case 'home':
      homeDisplay = activeComponent
      break
    case 'matches':
      matchesDisplay = activeComponent
      break
    case 'comparator':
      comparatorDisplay = activeComponent
      break
    // case "drop":
    //   dropDisplay = activeComponent;
    //   break;
    // case 'tennis':
    //   tennisDisplay = activeComponent
    //   break
    // case "op":
    //   opDisplay = activeComponent;
    //   break;
    // case "last":
    //   lastDisplay = activeComponent;
    //   break;
    default:
      break
  }

  return (
    <>
      <div style={homeDisplay}>
        <Home />
      </div>
      <div style={matchesDisplay}>
        <Matches />
      </div>
      <div style={comparatorDisplay}>
        <OddsportalDrop />
      </div>
      {/* <div style={dropDisplay}>
        <Drop  />
      </div> */}
      {/* <div style={tennisDisplay}>
          <TennisFinder partidos={tennis} />
        </div> */}
      {/* <div style={opDisplay}>
        <OpFinder />
      </div> */}
      {/* <div style={lastDisplay}>
        <LastMatches  />
      </div> */}
    </>
  )
}

export default RouterManager
