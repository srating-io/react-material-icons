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
    <path d="M3 3h18v18H3z" />
  </svg>
);
export default createIcon(Square);
