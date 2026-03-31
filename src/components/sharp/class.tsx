import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Class = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M20 2H4v20h16zM6 4h5v8l-2.5-1.5L6 12z" />
  </svg>
);
export default createIcon(Class);
