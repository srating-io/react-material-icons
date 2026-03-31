import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Markunread = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 4H2v16h20zm-2 4-8 5-8-5V6l8 5 8-5z" />
  </svg>
);
export default createIcon(Markunread);
