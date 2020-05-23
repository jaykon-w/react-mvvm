import { IDigimonService, Digimon } from "./digimon.service.interface";

export class DigimonServiceMock extends IDigimonService {
  async getDigimon(name: string): Promise<Digimon[]> {
    return [{
      name,
      img: "https://digimon.shadowsmith.com/img/koromon.jpg",
      level: "0",
    }];
  }

  async lisDigimons(): Promise<Digimon[]> {
    return [
      {
        name: "Koromon",
        img: "https://digimon.shadowsmith.com/img/koromon.jpg",
        level: "In Training",
      },
      {
        name: "Tsunomon",
        img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
        level: "In Training",
      },
    ];
  }
}
