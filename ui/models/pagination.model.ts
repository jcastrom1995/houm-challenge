interface PaginationI {
  current: number;
  totalPages: number | null;
  isLoading: boolean;
  onPrev: (page: number) => void;
  onNext: (page: number) => void;
}

export type { PaginationI };
