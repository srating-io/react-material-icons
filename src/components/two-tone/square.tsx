import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Square = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M5 5h14v14H5z" opacity={0.3} />
    <path d="M3 3v18h18V3zm16 16H5V5h14z" />
  </svg>
);
export default createIcon(Square);
