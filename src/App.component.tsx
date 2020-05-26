import { Link, Redirect, Router, RouteComponentProps } from "@reach/router";
import React from "react";
import "./App.component.css";
import LoadingComponent from './shared/components/loading/Loading.component';

const PokemonModule = React.lazy(() => import("./modules/pages/pokemon/Pokemon.module"));
const DigimonModule = React.lazy(() => import("./modules/pages/digimon/Digimon.module"));

const App: React.FC<RouteComponentProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/pokemon">Pokemon</Link> &nbsp; | &nbsp;
          <Link to="/digimon">Digimon</Link>
        </div>
        <br />
        <br />
        <br />
        <React.Suspense fallback={<LoadingComponent />}>
          <Router>
            <DigimonModule path="/digimon/*" />
            <Redirect from="/" to="/pokemon/" noThrow />
            <PokemonModule path="/pokemon/*" />
          </Router>
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
