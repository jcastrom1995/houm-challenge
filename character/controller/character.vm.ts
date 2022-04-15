import { useState, useEffect, useCallback, useMemo } from "react";
import useStore from "character/repository/characters.store";
import { Character, CharacterResponse } from "character/models";
import {
  getCharacter,
  getCharacters,
} from "character/repository/character.service";

const useCharacterViewModel = () => {
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [character, setCharacter] = useState<Character | null>();
  const [characters, setCharacters] = useState<Character[]>(); // charcters filters
  const [charactersData, setCharactersData] = useState<CharacterResponse>(); // base characters list
  const { updateTotalPage, changeLoading, loading, search, currentPage } =
    useStore();
  const controller = useMemo(() => new AbortController(), []);

  const requestCharacters = useCallback(
    (url?: string) => {
      changeLoading(true);

      getCharacters(url)
        .then((data) => {
          setCharactersData(data);
          setCharacters(data.results);

          updateTotalPage(data.info.pages);
        })
        .catch(() => setError(true))
        .finally(() => changeLoading(false));
    },
    [changeLoading, updateTotalPage]
  );

  useEffect(() => {
    requestCharacters(`/character/?page=${currentPage}`);

    return () => controller.abort();
  }, [currentPage, requestCharacters, controller]);

  useEffect(() => {
    const characterFiltered = charactersData?.results.filter((char) =>
      char.name.toLowerCase().includes(search.toLowerCase())
    );

    setCharacters(characterFiltered);
  }, [search, charactersData?.results]);

  const handleOpenModal = (id: number) => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
    getCharacterInfo(id);
  };

  const handleCloseModal = () => {
    document.body.style.overflow = "auto";
    setShowModal(false);
    setCharacter(null);
  };

  const getCharacterInfo = (id: number) => {
    setLoadingModal(true);
    getCharacter(id)
      .then((data) => {
        setCharacter(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoadingModal(false));
  };

  return {
    characters,
    loading,
    error,
    showModal,
    handleOpenModal,
    character,
    loadingModal,
    handleCloseModal,
    requestCharacters,
  };
};

export default useCharacterViewModel;
