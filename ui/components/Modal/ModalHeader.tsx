import { ReactElement } from "react";
import { Header } from "ui/models";

import s from "./Modal.module.css";

const ModalHeader = ({ children }: Header): ReactElement => {
  return <header className={s.header}>{children}</header>;
};

export default ModalHeader;
