import { ReactElement, ReactNode } from "react";
import { CharacterProvider } from "character/repository/characters.store";
import { Header } from "../Header";

import s from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <CharacterProvider>
      <main className={s.main}>
        <Header />
        <section className={s.content}>{children}</section>
      </main>
    </CharacterProvider>
  );
};

export default Layout;
