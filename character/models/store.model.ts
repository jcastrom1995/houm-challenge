import type { ReactNode } from "react";

type Action = {
  key: "SEARCH" | "CHANGE_PAGE" | "LOADING" | "TOTAL_PAGES";
  payload: string | number | boolean;
};

type CharacterState = {
  search: string;
  currentPage: number;
  totalPage: number | null;
  loading: boolean;
  changeSearch: (value: string) => void;
  changeLoading: (value: boolean) => void;
  updateTotalPage: (value: number) => void;
  changePage: (value: number) => void;
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
