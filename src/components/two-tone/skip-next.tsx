import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SkipNext = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M8 9.86v4.28L11.03 12z" opacity={0.3} />
    <path d="M14.5 12 6 6v12zM8 9.86 11.03 12 8 14.14zM16 6h2v12h-2z" />
  </svg>
);
export default createIcon(SkipNext);
