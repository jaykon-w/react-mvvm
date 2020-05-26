import { Link, RouteComponentProps } from "@reach/router";
import React, { useEffect } from "react";
import { Observer } from "../../../lib/Observer";
import { useProvider } from "../../../lib/Provider";
import { PokemonController } from "./Pokemon.controller";
import { combineLatest } from "rxjs";
import LoadingComponent from "../../../shared/components/loading/Loading.component";

type InjectedProps = {};

type Props = {} & RouteComponentProps;

const Pokemon: React.FC<Props & InjectedProps> = (props) => {
  const pokemonController = useProvider(PokemonController);

  useEffect(() => {
    if (pokemonController.lastPokemon) return;
    pokemonController.getPokemon();
  });

  return (
    <div>
      <Observer
        stream={combineLatest(
          pokemonController.pokemon,
          pokemonController.loading
        )}
      >
        {([pokemon, loading]) => {
          return loading ? (
            <LoadingComponent />
          ) : (
            <div>
              <h1>Pokedex</h1>
              <Link to={pokemon.id.toString()}>
                <img width="200" height="200" src={pokemon.sprites.front_default} />
              </Link>
              <h2 style={{textTransform: 'capitalize'}}>{pokemon.name}</h2>
              <button onClick={() => pokemonController.getPreviousPokemon()}>
                Pokemon anterior
              </button>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => pokemonController.getNextPokemon()}>
                Próximo pokemon
              </button>
            </div>
          );
        }}
      </Observer>
    </div>
  );
};

export default Pokemon as React.FC<Props>;
