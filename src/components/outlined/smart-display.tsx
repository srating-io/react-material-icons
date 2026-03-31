import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SmartDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M9.5 7.5v9l7-4.5z" />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14.01H4V5.99h16z" />
  </svg>
);
export default createIcon(SmartDisplay);
