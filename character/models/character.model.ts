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
  episode: string[];
  created: Date;
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface CharacterResponse {
  info: Info;
  results: Character[];
}

export type { CharacterResponse, Character };
