import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 21h19v-3H2zM21 8H2v8h19zM2 3v3h19V3z" />
  </svg>
);
export default createIcon(ViewDay);
