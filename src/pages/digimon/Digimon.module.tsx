import { RouteComponentProps, Router } from "@reach/router";
import React, { useMemo } from "react";
import { Provider } from "../../lib/Provider";
import { DigimonService } from "../../service/digimon/digimon.service";
import Digimon from "./Digimon.component";
import { IDigimonService } from "../../service/digimon/digimon.service.interface";
import { DigimonController } from "./Digimon.controller";
import Detail from "./Detail.component";

const DigimonModule: React.FC<RouteComponentProps> = () => {
  const binds = useMemo(
    () => [
      // () => new PokemonServiceMock(),
      () => new DigimonService(),
      (inject: any) => new DigimonController(inject(IDigimonService)),
    ],
    []
  );
  return (
    <Provider
      binds={binds}
    >
      <Router>
        <Digimon path="/" />
        <Detail path="/:name" />
      </Router>
    </Provider>
  );
};

export default DigimonModule;
