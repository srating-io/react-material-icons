import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const TurnSharpLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M6 6.83 4.41 8.41 3 7l4-4 4 4-1.41 1.41L8 6.83V13h10v8h-2v-6H6z" />
  </svg>
);
export default createIcon(TurnSharpLeft);
