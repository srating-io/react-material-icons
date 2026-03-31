import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Tv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M23 3H1v16h7v2h8v-2h6.99zm-2 14H3V5h18z" />
  </svg>
);
export default createIcon(Tv);
