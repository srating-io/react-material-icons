import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const NavigateNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6z" />
  </svg>
);
export default createIcon(NavigateNext);
