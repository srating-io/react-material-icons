import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ArrowForwardIos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" />
  </svg>
);
export default createIcon(ArrowForwardIos);
