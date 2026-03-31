import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const WarningAmber = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M1 21h22L12 2zm3.47-2L12 5.99 19.53 19zM11 16h2v2h-2zm0-6h2v4h-2z" />
  </svg>
);
export default createIcon(WarningAmber);
