import { ReactElement } from "react";
import { Modal as ModalI } from "ui/models";
import ModalHeader from "./ModalHeader";

import s from "./Modal.module.css";
import ModalContent from "./ModalContent";

const Modal = ({ children }: ModalI): ReactElement => {
  return (
    <section className={s.shadow}>
      <div className={s.modal}>{children}</div>
    </section>
  );
};

Modal.Header = ModalHeader;

Modal.Content = ModalContent;

export default Modal;
