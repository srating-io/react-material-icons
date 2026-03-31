import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Woman2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M13.41 7h-2.82L7 16h3.5v6h3v-6H17z" />
    <circle cx={12} cy={4} r={2} />
  </svg>
);
export default createIcon(Woman2);
