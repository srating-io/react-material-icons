import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Park = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17 12h2L12 2 5.05 12H7l-3.9 6h6.92v4h3.96v-4H21z" />
  </svg>
);
export default createIcon(Park);
