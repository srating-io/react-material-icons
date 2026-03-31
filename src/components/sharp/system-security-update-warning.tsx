import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SystemSecurityUpdateWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M11 15h2v2h-2zm0-8h2v6h-2z" />
    <path d="M5.01 1v22H19V1zM17 18H7V6h10z" />
  </svg>
);
export default createIcon(SystemSecurityUpdateWarning);
