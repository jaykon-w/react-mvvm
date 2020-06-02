import { ReplaySubject, BehaviorSubject } from "rxjs";
import {
  IPokemonService,
  Pokemon,
} from "../../../shared/services/pokemon/pokemon.service.interface";

export class PokemonController {
  pokemon = new ReplaySubject<Pokemon>(1);
  loading = new BehaviorSubject<boolean>(false);
  lastPokemon?: Pokemon;

  private lastPokemonId = 1;

  constructor(private apiService: IPokemonService) {}

  updatePokemon(pokemon: Pokemon) {
    this.pokemon.next(pokemon);
    this.lastPokemon = pokemon;
  }

  async getPokemon(id: number = this.lastPokemonId) {
    this.loading.next(true);
    try {
      const pokemon = await this.apiService.getPokemon(id);
      this.updatePokemon(pokemon);
      this.lastPokemonId = id;
    } finally {
      this.loading.next(false);
    }
  }

  async getNextPokemon() {
    this.getPokemon(this.lastPokemonId + 1);
  }

  async getPreviousPokemon() {
    this.getPokemon(Math.max(1, this.lastPokemonId - 1));
  }
}
