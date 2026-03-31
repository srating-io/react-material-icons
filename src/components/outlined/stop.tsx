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
    <path d="M16 8v8H8V8zm2-2H6v12h12z" />
  </svg>
);
export default createIcon(Stop);
