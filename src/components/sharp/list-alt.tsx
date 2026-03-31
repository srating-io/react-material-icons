import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ListAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM3 3v18h18V3zm16 16H5V5h14z" />
  </svg>
);
export default createIcon(ListAlt);
