import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const DesktopWindows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M23 2H1v16h9v2H8v2h8v-2h-2v-2h9zm-2 14H3V4h18z" />
  </svg>
);
export default createIcon(DesktopWindows);
