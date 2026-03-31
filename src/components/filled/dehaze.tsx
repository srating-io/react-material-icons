import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Dehaze = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 15.5v2h20v-2zm0-5v2h20v-2zm0-5v2h20v-2z" />
  </svg>
);
export default createIcon(Dehaze);
