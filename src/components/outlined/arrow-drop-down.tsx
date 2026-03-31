import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m7 10 5 5 5-5z" />
  </svg>
);
export default createIcon(ArrowDropDown);
