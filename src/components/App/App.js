import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import Nav from "../Nav/Nav";
import RouterManager from "../RouterManager/RouterManager";
import "./App.css";
import Alerts from "../Alerts/Alerts";
import NewMatchesSidebar from "../NewMatchesSidebar";
import { PartidosProvider } from "../../PartidosContext";

const App = () => {
  return (
    <PartidosProvider>
      <HashRouter>
        <div className="nav-container">
          <Nav />
        </div>
        <div className="body-layout">
          <div className="switch-routes">
            <Switch>
              <Route path="/" exact>
                <RouterManager component="home" />
              </Route>
              <Route path="/comparator">
                <RouterManager component="comparator" />
              </Route>
              <Route path="/drop">
                <RouterManager component="drop" />
              </Route>
              {/* 
              <Route path='/tennis'>
              <RouterManager component='tennis' partidos={this.state} />  
            </Route> */}
              <Route path="/op">
                <RouterManager component="op" />
              </Route>
              <Route path="/last">
                <RouterManager component="last" />
              </Route>
            </Switch>
          </div>
          <div className="right-bar">
            <div className="alerts">
              <Alerts />
            </div>
            <div className="newMatches">
              <NewMatchesSidebar />
            </div>
          </div>
        </div>
      </HashRouter>
    </PartidosProvider>
  );
  // }
};

export default App;
