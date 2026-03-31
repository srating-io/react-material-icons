import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const LooksOne = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 3H3v18h18zm-7 14h-2V9h-2V7h4z" />
  </svg>
);
export default createIcon(LooksOne);
