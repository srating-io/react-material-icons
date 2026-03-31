import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const BatteryAlert = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17 4h-3V2h-4v2H7v18h10zm-4 14h-2v-2h2zm0-4h-2V9h2z" />
  </svg>
);
export default createIcon(BatteryAlert);
