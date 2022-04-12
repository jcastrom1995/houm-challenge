import { ReactElement } from "react";
import cn from "classnames";

import s from "./Heading.module.css";

export type HeadingProps = {
  rank: 1 | 2 | 3 | 4 | 5 | 6;
  type: "headline" | "title" | "subtitle" | "caption";
  text: string;
  spacing?:
    | "micro"
    | "tiny"
    | "small"
    | "base"
    | "semi"
    | "large"
    | "x-large"
    | undefined;
};

const Heading = ({
  rank = 2,
  text,
  type = "headline",
  spacing,
}: HeadingProps): ReactElement => {
  const Tag = (rank > 6 ? "h6" : `h${rank}`) as keyof JSX.IntrinsicElements;
  const spacingClass = spacing ? `spacing-${spacing}` : null;

  return (
    <Tag className={cn(s.heading, spacingClass, s[`heading-${type}`])}>
      {text}
    </Tag>
  );
};

Heading.defaultProps = {
  spacing: undefined,
};

export default Heading;
