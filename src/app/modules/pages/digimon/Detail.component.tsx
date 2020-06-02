import { RouteComponentProps } from "@reach/router";
import React, { useEffect } from "react";
import { Observer } from "../../../../lib/Observer";
import { useProvider } from "../../../../lib/Provider";
import { DigimonController } from "./Digimon.controller";
import LoadingComponent from '../../../shared/components/loading/Loading.component';

type InjectedProps = { name: string };

type Props = {} & RouteComponentProps

const Detail: React.FC<Props & InjectedProps> = (props) => {
  const digimonController = useProvider(DigimonController);

  useEffect(() => {
    digimonController.getDigimon(props.name);
  }, []);

  return (
    <div>
      <Observer
        stream={digimonController.digimon}
        default={<LoadingComponent />}
      >
        {(digimon) => {
          return (
            <div>
              <h1>Digimon</h1>
              <img width="200" src={digimon.img} />
              <h2>{digimon.name}</h2>
              <h4>Level: {digimon.level}</h4>
            </div>
          );
        }}
      </Observer>
    </div>
  );
};

export default Detail as React.FC<Props>;
