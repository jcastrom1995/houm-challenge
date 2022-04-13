import type { ReactNode } from "react";

type Action = {
  key: string;
  payload: string;
};

type CharacterState = {
  search: string;
};

type Dispatch = (action: Action) => void;

type CharacterProviderT = {
  children: ReactNode;
};

interface Store<T> {
  state: T;
  dispatch: Dispatch;
}

export type { CharacterState, Action, Dispatch, CharacterProviderT, Store };
