export interface Digimon {
  name: string;
  img: string;
  level: string;
}

export abstract class IDigimonService {
  abstract getDigimon(name: string): Promise<Digimon[]>;
  abstract lisDigimons(): Promise<Digimon[]>;
}
