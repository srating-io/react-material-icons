import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const House = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2z" />
  </svg>
);
export default createIcon(House);
