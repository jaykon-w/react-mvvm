import { RouteComponentProps, Router } from "@reach/router";
import React, { useMemo } from "react";
import { Provider } from "../../lib/Provider";
import { PokemonService } from "../../service/pokemon/pokemon.service";
import { IPokemonService } from "../../service/pokemon/pokemon.service.interface";
import Home from "./Home.component";
import { HomeController } from "./Home.controller";
import Detail from "./Detail.component";
import { PokemonServiceMock } from "../../service/pokemon/pokemon.service.mock";

const HomeModule: React.FC<RouteComponentProps> = () => {
  const binds = useMemo(
    () => [
      // () => new PokemonServiceMock(),
      () => new PokemonService(),
      (inject: any) => new HomeController(inject(IPokemonService)),
    ],
    []
  );

  return (
    <Provider binds={binds}>
      <Router>
        <Home path="/" />
        <Detail path="/:pokeId" />
      </Router>
    </Provider>
  );
};

export default HomeModule;
