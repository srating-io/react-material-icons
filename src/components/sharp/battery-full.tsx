import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const BatteryFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17 4h-3V2h-4v2H7v18h10z" />
  </svg>
);
export default createIcon(BatteryFull);
