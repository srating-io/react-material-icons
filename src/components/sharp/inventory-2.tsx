import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Inventory2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 2v6.7h1V22h18V8.7h1V2zm13 12H9v-2h6zm5-7H4V4h16z" />
  </svg>
);
export default createIcon(Inventory2);
