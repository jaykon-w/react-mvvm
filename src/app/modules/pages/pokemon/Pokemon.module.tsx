import { RouteComponentProps, Router } from "@reach/router";
import React, { useMemo } from "react";
import { Provider } from "../../../../lib/Provider";
import { PokemonService } from "../../../shared/services/pokemon/pokemon.service";
import { IPokemonService } from "../../../shared/services/pokemon/pokemon.service.interface";
import Detail from "./Detail.component";
import Pokemon from './Pokemon.component';
import { PokemonController } from "./Pokemon.controller";

const PokemonModule: React.FC<RouteComponentProps> = () => {
  const binds = useMemo(
    () => [
      // () => new PokemonServiceMock(),
      () => new PokemonService(),
      (inject: any) => new PokemonController(inject(IPokemonService)),
    ],
    []
  );

  return (
    <Provider binds={binds}>
      <Router>
        <Pokemon path="/" />
        <Detail path="/:pokeId" />
      </Router>
    </Provider>
  );
};

export default PokemonModule;
