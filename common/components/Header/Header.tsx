import useStore from "character/repository/characters.store";
import { Pagination } from "ui/components";
import Image from "next/image";
import { Search } from "../Search";

import s from "./Header.module.css";

const Header = () => {
  const { totalPage, currentPage, loading, changePage, search, changeSearch } =
    useStore();

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <Image src="/houmLogo.svg" width={100} height={50} alt="Houm Logo" />
      </div>
      <Search value={search} onChange={(val) => changeSearch(val)} />
      <Pagination
        current={currentPage}
        totalPages={totalPage}
        onPrev={(page) => changePage(page)}
        onNext={(page) => changePage(page)}
        isLoading={loading}
      />
    </header>
  );
};

export default Header;
