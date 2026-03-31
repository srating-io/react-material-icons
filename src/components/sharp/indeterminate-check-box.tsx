import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const IndeterminateCheckBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 3H3v18h18zm-4 10H7v-2h10z" />
  </svg>
);
export default createIcon(IndeterminateCheckBox);
