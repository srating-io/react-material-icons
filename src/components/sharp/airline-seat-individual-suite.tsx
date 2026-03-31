import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const AirlineSeatIndividualSuite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3 1.35 3 3 3m16-6H11v7H3V7H1v10h22z" />
  </svg>
);
export default createIcon(AirlineSeatIndividualSuite);
