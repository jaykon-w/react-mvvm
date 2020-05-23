import { ReplaySubject } from "rxjs";
import { Digimon, IDigimonService } from "../../service/digimon/digimon.service.interface";

export class DigimonController {
  digimon = new ReplaySubject<Digimon>(1);
  digimons = new ReplaySubject<Digimon[]>(1);

  constructor(private apiService: IDigimonService) {}

  updateDigimon(digimon: Digimon) {
    this.digimon.next(digimon);
  }

  updateDigimons(digimons: Digimon[]) {
    this.digimons.next(digimons);
  }

  async getDigimon(name: string) {
    const digimon = await this.apiService.getDigimon(name);
    this.updateDigimon(digimon[0]);
  }

  async listDigimons() {
    const digimons = await this.apiService.lisDigimons();
    this.updateDigimons(digimons);
  }
}
