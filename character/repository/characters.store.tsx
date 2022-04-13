import { createContext, useContext, useMemo, useReducer } from "react";
import {
  Action,
  CharacterProviderT,
  CharacterState,
  Store,
} from "character/models";

const defaultState = { search: "" };

const CharacterContext = createContext<Store<CharacterState>>({
  state: {
    search: "",
  },
  dispatch: () => null,
});

function characterReducer(state: CharacterState, action: Action) {
  switch (action.key) {
    case "search":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
}

export function CharacterProvider({ children }: CharacterProviderT) {
  const [state, dispatch] = useReducer(characterReducer, defaultState);
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter(): Store<CharacterState> {
  const context = useContext(CharacterContext);
  if (!context)
    throw new Error("useCharacter must be used inside a CharacterProvider");

  return context;
}
