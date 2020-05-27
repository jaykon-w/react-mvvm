import React from "react";
import { Observer } from "../../../../lib/Observer";
import { useProvider } from "../../../../lib/Provider";
import { PokemonController } from "../Pokemon.controller";
import LoadingComponent from "../../../../shared/components/loading/Loading.component";

type InjectedProps = {};

type Props = {};

const style = {
  border: "solid 1px grey",
  padding: "16px",
};

const flexContainer = {
  display: "flex",
  justifyContent: "space-between",
};

const Attributes: React.FC<Props & InjectedProps> = (props) => {
  const pokemonController = useProvider(PokemonController);

  return (
    <div style={style}>
      <Observer
        stream={pokemonController.pokemon}
        default={<LoadingComponent />}
      >
        {(pokemon) => {
          return (
            <div>
              <h3>Atributos</h3>
              {pokemon.stats
                .map((e, i) => (
                  <div key={i}>
                    <div style={flexContainer}>
                      <div>{e.stat.name}:</div>
                      <div style={{ width: "60px" }}></div>
                      <div>{e.base_stat}</div>
                    </div>
                    <hr />
                  </div>
                ))
                .reverse()}
            </div>
          );
        }}
      </Observer>
    </div>
  );
};

export default Attributes as React.FC<Props>;
