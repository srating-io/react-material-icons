import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Padding = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path
      d="M5 19h14V5H5zM15 7h2v2h-2zm-4 0h2v2h-2zM7 7h2v2H7z"
      opacity={0.3}
    />
    <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m16 14H5V5h14z" />
    <path d="M15 7h2v2h-2zM7 7h2v2H7zm4 0h2v2h-2z" />
  </svg>
);
export default createIcon(Padding);
