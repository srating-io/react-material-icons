import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const AirlineSeatLegroomNormal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M5 15V3H3v14h11v-2zm17 3h-3v-7c0-1.1-.9-2-2-2h-5V3H6v11h10v7h6z" />
  </svg>
);
export default createIcon(AirlineSeatLegroomNormal);
