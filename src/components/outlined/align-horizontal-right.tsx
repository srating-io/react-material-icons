import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const AlignHorizontalRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M20 2h2v20h-2zM2 10h16V7H2zm6 7h10v-3H8z" />
  </svg>
);
export default createIcon(AlignHorizontalRight);
