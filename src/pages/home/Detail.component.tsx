import React, { useState, useEffect } from "react";
import { useProvider } from "../../lib/Provider";
import { HomeController } from "./Home.controller";
import { Observer } from "../../lib/Observer";
import { RouteComponentProps, Link } from "@reach/router";

type InjectedProps = { pokeId?: string } & RouteComponentProps;

interface Props {}

const Detail: React.FC<Props & InjectedProps> = (props) => {
  const homeController = useProvider(HomeController);

  useEffect(() => {
    homeController.getPokemon(+(props.pokeId ?? 1));
  }, []);

  return (
    <div>
      <Observer stream={homeController.pokemon} default={<h1>Loading...</h1>}>
        {(pokemon) => {
          return (
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
          );
        }}
      </Observer>
    </div>
  );
};

export default Detail;
