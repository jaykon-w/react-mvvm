import { Link, RouteComponentProps } from "@reach/router";
import React, { useEffect } from "react";
import { Observer } from "../../../../lib/Observer";
import { useProvider } from "../../../../lib/Provider";
import { DigimonController } from "./Digimon.controller";
import LoadingComponent from '../../../shared/components/loading/Loading.component';

type InjectedProps = {};

type Props = {} & RouteComponentProps;

const Digimon: React.FC<Props & InjectedProps> = (props) => {
  const digimonController = useProvider(DigimonController);

  useEffect(() => {
    digimonController.listDigimons();
  }, []);

  return (
    <div>
      <Observer
        stream={digimonController.digimons}
        default={<LoadingComponent />}
      >
        {(digimons) => {
          return (
            <div>
              <h1>Digimons</h1>
              {digimons.map((e, i) => (
                <div key={i}>
                  <Link to={e.name}>
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

export default Digimon as React.FC<Props>;
