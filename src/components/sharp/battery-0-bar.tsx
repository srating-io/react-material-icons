import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Battery0Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17 4v18H7V4h3V2h4v2zm-2 2H9v14h6z" />
  </svg>
);
export default createIcon(Battery0Bar);
