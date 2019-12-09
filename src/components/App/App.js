import React, { Component } from "react";
import OddsportalDrop from '../OddsportalDrop/OddsportalDrop';
import Houses from '../Houses/Houses'
import { Tabs, Tab }from 'react-bootstrap';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Tabs className='tabs' defaultActiveKey="OddsportalDrop" id="uncontrolled-tab-example">
          <Tab eventKey="OddsportalDrop" title="OddsportalDrop">
            <OddsportalDrop />
          </Tab>
          <Tab eventKey="Houses" title="Houses">
            <h1>
                <Houses />
            </h1>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
