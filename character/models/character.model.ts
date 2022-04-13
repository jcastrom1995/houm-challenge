interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  url: string;
  created: Date;
}

interface CharacterResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}

export type { CharacterResponse, Character };
