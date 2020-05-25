import { ReplaySubject } from "rxjs";
import {
  IPokemonService,
  Pokemon,
} from "../../service/pokemon/pokemon.service.interface";

export class HomeController {
  pokemon = new ReplaySubject<Pokemon>(1);

  private lastPokemonId = 1;

  constructor(private apiService: IPokemonService) {
    console.log("aki");
  }

  updatePokemon(pokemon: Pokemon) {
    this.pokemon.next(pokemon);
  }

  async getPokemon(id: number = this.lastPokemonId) {
    const pokemon = await this.apiService.getPokemon(id);
    this.updatePokemon(pokemon);
    this.lastPokemonId = id;
  }

  async getNextPokemon() {
    this.getPokemon(this.lastPokemonId + 1);
  }
}
