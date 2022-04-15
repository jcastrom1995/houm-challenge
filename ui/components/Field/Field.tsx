import { ReactElement, ReactNode } from "react";
import cn from "classnames";

interface FieldI {
  children: ReactNode;
  spacing?:
    | "micro"
    | "tiny"
    | "small"
    | "base"
    | "semi"
    | "large"
    | "x-large"
    | undefined;
  className?: string;
}

const Field = ({ children, spacing, className }: FieldI): ReactElement => {
  const spacingClass = spacing ? `spacing-${spacing}` : null;

  return <div className={cn(spacingClass, className)}>{children}</div>;
};

Field.defaultProps = {
  spacing: undefined,
  className: null,
};

export default Field;
