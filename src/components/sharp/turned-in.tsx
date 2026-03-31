import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const TurnedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 3H5v18l7-3 7 3z" />
  </svg>
);
export default createIcon(TurnedIn);
