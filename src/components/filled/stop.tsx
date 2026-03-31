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
    <path d="M6 6h12v12H6z" />
  </svg>
);
export default createIcon(Stop);
