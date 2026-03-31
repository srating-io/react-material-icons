import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Bolt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M11 21h-1l1-7H6.74S10.42 7.54 13 3h1l-1 7h4.28z" />
  </svg>
);
export default createIcon(Bolt);
