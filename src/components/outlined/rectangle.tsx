import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Rectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 4v16h20V4zm18 14H4V6h16z" />
  </svg>
);
export default createIcon(Rectangle);
