import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SkipPrevious = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M16 14.14V9.86L12.97 12z" opacity={0.3} />
    <path d="M6 6h2v12H6zm12 12V6l-8.5 6zm-2-3.86L12.97 12 16 9.86z" />
  </svg>
);
export default createIcon(SkipPrevious);
