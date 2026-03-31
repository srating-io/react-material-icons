import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Margin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path
      d="M5 19h14V5H5zM15 7h2v2h-2zm0 4h2v2h-2zm-4-4h2v2h-2zm0 4h2v2h-2zM7 7h2v2H7zm0 4h2v2H7z"
      opacity={0.3}
    />
    <path d="M7 7h2v2H7zm0 4h2v2H7z" />
    <path d="M3 3v18h18V3zm16 16H5V5h14z" />
    <path d="M11 7h2v2h-2zm4 4h2v2h-2zm-4 0h2v2h-2zm4-4h2v2h-2z" />
  </svg>
);
export default createIcon(Margin);
