import create from "zustand";
import { CharacterState } from "character/models";

const useStore = create<CharacterState>((set) => ({
  search: "",
  currentPage: 1,
  totalPage: null,
  loading: false,
  changeSearch: (searchValue: string) => {
    set((state) => ({
      ...state,
      search: searchValue,
    }));
  },
  changeLoading: (loading: boolean) => {
    set((state) => ({
      ...state,
      loading,
    }));
  },
  updateTotalPage: (totalPageValue: number) => {
    set((state) => ({
      ...state,
      totalPage: totalPageValue,
    }));
  },
  changePage: (newPage: number) => {
    set((state) => ({
      ...state,
      currentPage: newPage,
    }));
  },
}));

export default useStore;
