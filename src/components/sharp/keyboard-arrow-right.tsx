import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const KeyboardArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z" />
  </svg>
);
export default createIcon(KeyboardArrowRight);
