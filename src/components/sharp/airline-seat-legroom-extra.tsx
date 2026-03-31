import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const AirlineSeatLegroomExtra = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M4 3H2v14h11v-2H4zm18.24 12.96-2.53 1.15-3.41-6.98A2.02 2.02 0 0 0 14.51 9H11V3H5v11h10l3.41 7 5.07-2.32z" />
  </svg>
);
export default createIcon(AirlineSeatLegroomExtra);
