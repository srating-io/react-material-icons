import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ChargingStation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m14.5 11-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z" />
  </svg>
);
export default createIcon(ChargingStation);
