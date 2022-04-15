import { API } from "lib/api";
import { Character, CharacterResponse } from "character/models";

const getCharacters = async (url?: string): Promise<CharacterResponse> => {
  try {
    const response = await API.get(url || "character");

    return response.data;
  } catch (error) {
    throw new Error("Error response");
  }
};

const getCharacter = async (id: number): Promise<Character> => {
  try {
    const response = await API.get(`character/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error response");
  }
};

export { getCharacters, getCharacter };
