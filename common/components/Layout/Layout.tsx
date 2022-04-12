import { ReactElement, ReactNode } from "react";
import { Header } from "../Header";

import s from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <main className={s.main}>
      <Header />
      <section className={s.content}>{children}</section>
    </main>
  );
};

export default Layout;
