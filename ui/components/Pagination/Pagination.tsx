import { ReactElement } from "react";
import * as Icon from "Icons";
import { PaginationI } from "../../models";
import { Text } from "../Text";

import s from "./Pagination.module.css";

const Pagination = ({
  current,
  totalPages,
  onPrev,
  onNext,
  isLoading,
}: PaginationI): ReactElement => {
  return (
    <div className={s.pagination}>
      <button
        disabled={isLoading || current <= 1}
        onClick={() => onPrev(current - 1)}
        className={s.action}
      >
        <Icon.ChevronLeft size={20} />
      </button>
      <Text tag="span">
        {current} <span className={s.info}>of {totalPages}</span>
      </Text>
      <button
        disabled={isLoading || current >= totalPages!}
        onClick={() => onNext(current + 1)}
        className={s.action}
      >
        <Icon.ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
