import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Stop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M8 8h8v8H8z" opacity={0.3} />
    <path d="M6 18h12V6H6zM8 8h8v8H8z" />
  </svg>
);
export default createIcon(Stop);
