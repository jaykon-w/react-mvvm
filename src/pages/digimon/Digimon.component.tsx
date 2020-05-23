import { Link, RouteComponentProps } from "@reach/router";
import React, { useEffect } from "react";
import { Observer } from "../../lib/Observer";
import { useProvider } from "../../lib/Provider";
import { DigimonController } from "./Digimon.controller";

type InjectedProps = {} & RouteComponentProps;

interface Props {}

const Digimon: React.FC<Props & InjectedProps> = (props) => {
  const digimonController = useProvider(DigimonController);

  useEffect(() => {
    digimonController.listDigimons();
  }, []);

  return (
    <div>
      <Observer
        stream={digimonController.digimons}
        default={<h1>Loading...</h1>}
      >
        {(digimons) => {
          return (
            <div>
              <h1>Digimons</h1>
              {digimons.map((e, i) => (
                <div key={i}>
                  <Link to={props.uri +  "/" + e.name}>
                    <img width="200" src={e.img} />
                  </Link>
                  <h2>{e.name}</h2>
                </div>
              ))}
            </div>
          );
        }}
      </Observer>
    </div>
  );
};

export default Digimon;
