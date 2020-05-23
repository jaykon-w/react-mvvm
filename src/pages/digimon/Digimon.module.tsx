import { RouteComponentProps, Router } from "@reach/router";
import React from "react";
import { Provider } from "../../lib/Provider";
import { DigimonService } from "../../service/digimon/digimon.service";
import Digimon from "./Digimon.component";
import { IDigimonService } from "../../service/digimon/digimon.service.interface";
import { DigimonController } from "./Digimon.controller";
import Detail from "./Detail.component";

const DigimonModule: React.FC<RouteComponentProps> = () => {
  return (
    <Provider
      binds={[
        // () => new PokemonServiceMock(),
        () => new DigimonService(),
        (inject) => new DigimonController(inject(IDigimonService)),
      ]}
    >
      <Router>
        <Digimon path="/" />
        <Detail path="/:name" />
      </Router>
    </Provider>
  );
};

export default DigimonModule;
