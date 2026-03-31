import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Directions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22.41 12 12 1.59 1.59 11.99 12 22.41zM14 14.5V12h-4v3H8v-5h6V7.5l3.5 3.5z" />
  </svg>
);
export default createIcon(Directions);
