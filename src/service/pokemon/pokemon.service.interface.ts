export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export abstract class IPokemonService {
  abstract getPokemon(id: number): Promise<Pokemon>;
}
