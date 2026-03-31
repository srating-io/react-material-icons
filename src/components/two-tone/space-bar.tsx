import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SpaceBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M18 13H6V9H4v6h16V9h-2z" />
  </svg>
);
export default createIcon(SpaceBar);
