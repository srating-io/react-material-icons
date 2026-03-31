import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const EdgesensorLow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 7h2v7H2zm18 3h2v7h-2zM6 2v20h12V2zm10 15H8V7h8z" />
  </svg>
);
export default createIcon(EdgesensorLow);
