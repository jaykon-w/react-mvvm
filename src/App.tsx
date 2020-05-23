import React from "react";
import "./App.css";
import HomeModule from "./pages/home/Home.module";
import { Redirect, Router, Link, RouteComponentProps } from "@reach/router";
import DigimonModule from "./pages/digimon/Digimon.module";

const Route: React.FC<
  RouteComponentProps & { children: React.ReactElement }
> = ({ children }) => children;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/pokemon">Pokemon</Link> &nbsp; | &nbsp;
          <Link to="/digimon">Digimon</Link>
        </div>
        <Router>
          <Route path="/digimon">
            <DigimonModule default />
          </Route>
          <Route path="/pokemon">
            <HomeModule default />
          </Route>
        </Router>
        {/* <Redirect to="/" /> */}
      </header>
    </div>
  );
}

export default App;
