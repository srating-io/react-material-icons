import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const DoorBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 19V3H5v16H3v2h18v-2zm-8-6H9v-2h2z" />
  </svg>
);
export default createIcon(DoorBack);
