import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Escalator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 3H3v18h18zm-2.5 6h-3.2l-5 9H5.5v-3h3.2l5-9h4.8z" />
  </svg>
);
export default createIcon(Escalator);
