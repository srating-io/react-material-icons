import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const DoorFront = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M7 19h10V5H7zm6-8h2v2h-2z" opacity={0.3} />
    <path d="M13 11h2v2h-2z" />
    <path d="M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2zm-2 0H7V5h10z" />
  </svg>
);
export default createIcon(DoorFront);
