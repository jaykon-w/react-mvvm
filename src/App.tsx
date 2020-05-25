import { Link, Redirect, Router, RouteComponentProps } from "@reach/router";
import React from "react";
import "./App.css";

const HomeModule = React.lazy(() => import("./pages/home/Home.module"));
const DigimonModule = React.lazy(() => import("./pages/digimon/Digimon.module"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/pokemon">Pokemon</Link> &nbsp; | &nbsp;
          <Link to="/digimon">Digimon</Link>
        </div>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <Router>
            <DigimonModule path="/digimon/*" />
            <Redirect from="/" to="/pokemon/" noThrow />
            <HomeModule path="/pokemon/*" />
          </Router>
        </React.Suspense>
        {/* <Redirect to="/" /> */}
      </header>
    </div>
  );
}

export default App;
