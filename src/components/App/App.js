import React, { Component } from "react";
import OddsportalDrop from '../OddsportalDrop/OddsportalDrop';
//import Drop from '../Drop/Drop'
import { Tabs, Tab }from 'react-bootstrap';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Tabs className='tabs' defaultActiveKey="Comparator" id="uncontrolled-tab-example">
          <Tab className="OddsP-Tab" eventKey="Comparator" title="Comparator">
            <OddsportalDrop />
          </Tab>
          {/* <Tab eventKey="Drops" title="Drops">
            <Drop />
          </Tab> */}
        </Tabs>
      </div>
    );
  }
}

export default App;
