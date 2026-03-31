import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Airlines = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M13 4 2 20h17l3-16zm1.5 10a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5" />
  </svg>
);
export default createIcon(Airlines);
