import { API } from "lib/api";
import { CharacterResponse } from "character/models";

const getCharacters = async (): Promise<CharacterResponse> => {
  try {
    const response = await API.get("character");
    return response.data;
  } catch (error) {
    throw new Error("Error response");
  }
};

export { getCharacters };
