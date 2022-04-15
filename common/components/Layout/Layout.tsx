import { ReactElement, ReactNode } from "react";
import Head from "next/head";
import { Header } from "../Header";

import s from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <main className={s.main}>
      <Head>
        <title>Rick & Morty App</title>
      </Head>

      <Header />
      <section className={s.content}>{children}</section>
    </main>
  );
};

export default Layout;
