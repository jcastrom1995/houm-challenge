import { ReactElement } from "react";
import s from "./Button.module.css";

type ButtonType = JSX.IntrinsicElements["button"]["type"];

interface ButtonI {
  children: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: ButtonType;
  dataRole?: "primary" | "secondary";
  width: number;
}

const Button = ({
  children,
  disabled,
  onClick,
  type,
  dataRole,
  width,
}: ButtonI): ReactElement => {
  return (
    <button
      type={type}
      className={s.button}
      disabled={disabled}
      onClick={onClick}
      data-role={dataRole}
      style={{ width: typeof width === "string" ? width : `${width}px` }}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: "button",
  dataRole: "primary",
};

export default Button;
