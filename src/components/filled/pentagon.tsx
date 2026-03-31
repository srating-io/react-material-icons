import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Pentagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m2 9 4 12h12l4-12-10-7z" />
  </svg>
);
export default createIcon(Pentagon);
