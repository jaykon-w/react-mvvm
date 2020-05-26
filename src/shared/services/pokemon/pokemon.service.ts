import { IPokemonService, Pokemon } from "./pokemon.service.interface";

export class PokemonService extends IPokemonService {
  getPokemon(id: number): Promise<Pokemon> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(e => e.json())
  }
}
