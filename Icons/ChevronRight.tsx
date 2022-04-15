import { ReactElement } from "react";
import { Icon } from "./Icon.interface";

const ChevronRight = ({ size }: Icon): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      height={size}
      width={size}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
};

ChevronRight.defaultProps = {
  size: 24,
};

export default ChevronRight;
