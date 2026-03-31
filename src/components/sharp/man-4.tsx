import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Man4 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M7.96 7 10 22h4l2.04-15z" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
export default createIcon(Man4);
