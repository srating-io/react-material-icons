import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CallToAction = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M23 3H1v18h22zm-2 16H3v-3h18z" />
  </svg>
);
export default createIcon(CallToAction);
