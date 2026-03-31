import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const FastForward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M15 9.86v4.28L18.03 12zm-9 0v4.28L9.03 12z" opacity={0.3} />
    <path d="m4 18 8.5-6L4 6zm2-8.14L9.03 12 6 14.14zM21.5 12 13 6v12zM15 9.86 18.03 12 15 14.14z" />
  </svg>
);
export default createIcon(FastForward);
