import { useState, useEffect } from "react";
import { useCharacter } from "character/repository/characters.store";
import { Character, CharacterResponse } from "character/models";
import { getCharacters } from "character/repository/character.service";

const useCharacterViewModel = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>();
  const [characterInformation, setCharactersInformation] =
    useState<CharacterResponse>();
  const { state } = useCharacter();

  useEffect(() => {
    getCharacters()
      .then((res) => {
        setCharacters(res.results);
        setCharactersInformation(res);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const searchCharacter = characterInformation?.results.filter((char) =>
      char.name.toLowerCase().includes(state.search.toLocaleLowerCase())
    ) as Character[];

    setCharacters(searchCharacter);
  }, [characterInformation?.results, characters, state.search]);

  return {
    characters,
    loading,
  };
};

export default useCharacterViewModel;
