import { Search } from "../Search";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <Search />
    </header>
  );
};

export default Header;
