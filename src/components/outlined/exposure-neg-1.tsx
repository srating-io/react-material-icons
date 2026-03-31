import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ExposureNeg1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M4 11v2h8v-2zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3z" />
  </svg>
);
export default createIcon(ExposureNeg1);
