import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ViewStream = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M3 19v-6h18v6zM3 5v6h18V5z" />
  </svg>
);
export default createIcon(ViewStream);
