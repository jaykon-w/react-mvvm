import { RouteComponentProps } from "@reach/router";
import React, { useEffect } from "react";
import { Observer } from "../../../../lib/Observer";
import { useProvider } from "../../../../lib/Provider";
import { PokemonController } from "./Pokemon.controller";
import Attributes from './components/Attributes.component';
import LoadingComponent from '../../../shared/components/loading/Loading.component';

type InjectedProps = { pokeId: string };

type Props = {} & RouteComponentProps;

const flexContainerStyle = {
  display: 'flex',
} 

const Detail: React.FC<Props & InjectedProps> = (props) => {
  const pokemonController = useProvider(PokemonController);

  useEffect(() => {
    pokemonController.getPokemon(+props.pokeId);
  }, []);

  return (
    <div>
      <Observer
        stream={pokemonController.pokemon}
        default={<LoadingComponent />}
      >
        {(pokemon) => {
          return (
            <div style={flexContainerStyle}>
              <div>
                <h1>Pokedex</h1>
                <div>No: {pokemon.id}</div>
                <img width="200" src={pokemon.sprites.front_default} />
                <h2>{pokemon.name}</h2>
                <h4>Tipo</h4>
                {pokemon.types.map((e, i) => (
                  <div key={i}>{e.type.name}</div>
                ))}
              </div>
              <div style={{width: '150px'}}></div>
              <Attributes />
            </div>
          );
        }}
      </Observer>
    </div>
  );
};

export default Detail as React.FC<Props>;
