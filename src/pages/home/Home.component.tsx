import React, { useState, useEffect } from "react";
import { useProvider } from "../../lib/Provider";
import { HomeController } from "./Home.controller";
import { Observer } from "../../lib/Observer";
import { RouteComponentProps, Link } from "@reach/router";

type InjectedProps = {} & RouteComponentProps;

interface Props {}

const Home: React.FC<Props & InjectedProps> = (props) => {
  const homeController = useProvider(HomeController);

  useEffect(() => {
    homeController.getPokemon();
  });

  return (
    <div>
      <Observer stream={homeController.pokemon} default={<h1>Loading...</h1>}>
        {(pokemon) => {
          return (
            <div>
              <h1>Pokedex</h1>
              <Link to={props.uri + "/" + pokemon.id}>
                <img width="200" src={pokemon.sprites.front_default} />
              </Link>
              <h2>{pokemon.name}</h2>
              <button onClick={() => homeController.getNextPokemon()}>
                Próximo pokemon
              </button>
            </div>
          );
        }}
      </Observer>
    </div>
  );
};

export default Home;
