import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const PowerInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 9v2h19V9zm0 6h5v-2H2zm7 0h5v-2H9zm7 0h5v-2h-5z" />
  </svg>
);
export default createIcon(PowerInput);
