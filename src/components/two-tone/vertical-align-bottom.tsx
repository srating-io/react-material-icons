import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const VerticalAlignBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M11 3v10H8l4 4 4-4h-3V3zM4 19h16v2H4z" />
  </svg>
);
export default createIcon(VerticalAlignBottom);
