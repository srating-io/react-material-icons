import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Inbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 3H3.01v18H21zm-2 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H5V5h14z" />
  </svg>
);
export default createIcon(Inbox);
