import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Launch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 19H5V5h7V3H3v18h18v-9h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z" />
  </svg>
);
export default createIcon(Launch);
