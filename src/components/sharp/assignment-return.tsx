import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const AssignmentReturn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 3h-6.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H3v18h18zm-9 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m4 12h-4v3l-5-5 5-5v3h4z" />
  </svg>
);
export default createIcon(AssignmentReturn);
