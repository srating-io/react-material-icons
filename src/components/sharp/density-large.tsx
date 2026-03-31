import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const DensityLarge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M3 3h18v2H3zm0 16h18v2H3z" />
  </svg>
);
export default createIcon(DensityLarge);
