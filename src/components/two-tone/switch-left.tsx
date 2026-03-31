import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SwitchLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M8.5 8.62v6.76L5.12 12z" opacity={0.3} />
    <path d="M8.5 8.62v6.76L5.12 12zM10 5l-7 7 7 7zm4 0v14l7-7z" />
  </svg>
);
export default createIcon(SwitchLeft);
