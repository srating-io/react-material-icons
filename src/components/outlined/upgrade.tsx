import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Upgrade = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M16 18v2H8v-2zM11 7.99V16h2V7.99h3L12 4 8 7.99z" />
  </svg>
);
export default createIcon(Upgrade);
