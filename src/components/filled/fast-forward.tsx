import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const FastForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m4 18 8.5-6L4 6zm9-12v12l8.5-6z" />
  </svg>
);
export default createIcon(FastForward);
