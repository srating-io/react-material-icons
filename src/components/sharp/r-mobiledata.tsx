import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const RMobiledata = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M7.8 7.2 9 10H7L5.87 7.33H4V10H2V2h7v5.2zM7 4H4v1.33h3z" />
  </svg>
);
export default createIcon(RMobiledata);
