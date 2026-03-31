import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Desk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M16 8h4v2h-4zm0 4h4v2h-4z" opacity={0.3} />
    <path d="M2 6v12h2V8h10v10h2v-2h4v2h2V6zm18 8h-4v-2h4zm0-4h-4V8h4z" />
  </svg>
);
export default createIcon(Desk);
