import { ReactElement, ReactNode } from "react";
import cn from "classnames";
import s from "./Text.module.css";

interface TextI {
  children: ReactNode;
  tag: string;
  spacing?:
    | "micro"
    | "tiny"
    | "small"
    | "base"
    | "semi"
    | "large"
    | "x-large"
    | undefined;
}

const Text = ({ children, tag = "p", spacing }: TextI): ReactElement => {
  const Tag = (tag === "p" ? "p" : "span") as keyof JSX.IntrinsicElements;
  const spacingClass = spacing ? `spacing-${spacing}` : null;

  return <Tag className={cn(s.text, spacingClass)}>{children}</Tag>;
};

Text.defaultProps = {
  spacing: undefined,
};

export default Text;
