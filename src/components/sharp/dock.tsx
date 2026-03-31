import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Dock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M8 23h8v-2H8zM18 1.01 6 1v18h12zM16 15H8V5h8z" />
  </svg>
);
export default createIcon(Dock);
