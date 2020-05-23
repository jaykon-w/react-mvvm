import { IDigimonService, Digimon } from "./digimon.service.interface";

export class DigimonService extends IDigimonService {
  getDigimon(name: string): Promise<Digimon[]> {
    return fetch(
      `https://digimon-api.herokuapp.com/api/digimon/name/${name}`
    ).then((e) => e.json());
  }

  lisDigimons(): Promise<Digimon[]> {
    return fetch(`https://digimon-api.herokuapp.com/api/digimon`).then((e) =>
      e.json()
    );
  }
}
