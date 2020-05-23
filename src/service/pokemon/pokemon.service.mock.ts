import { IPokemonService, Pokemon } from "./pokemon.service.interface";

export class PokemonServiceMock extends IPokemonService {
  async getPokemon(id: number): Promise<Pokemon> {
    return {
      id: 1,
      name: 'Pikachu',
      sprites: {
        front_default: 'https://w7.pngwing.com/pngs/585/436/png-transparent-pokemon-pikachu-illustration-icon-pikachu-background-mammal-food-vertebrate.png'
      },
      types: [{
        type: {
          name: 'eletric'
        }
      }]
    }
  }
}
