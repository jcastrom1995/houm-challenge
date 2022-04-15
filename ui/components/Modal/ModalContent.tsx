import { ReactElement } from "react";
import { Content } from "ui/models";

import s from "./Modal.module.css";

const ModalContent = ({ children }: Content): ReactElement => {
  return <section className={s.content}>{children}</section>;
};

export default ModalContent;
