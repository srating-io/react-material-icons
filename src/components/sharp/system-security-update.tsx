import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SystemSecurityUpdate = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M5 1v22h14V1zm12 17H7V6h10zm-1-6h-3V8h-2v4H8l4 4z" />
  </svg>
);
export default createIcon(SystemSecurityUpdate);
