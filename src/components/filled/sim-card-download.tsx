import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SimCardDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-6 15-4-4h3V9.02L13 9v4h3z" />
  </svg>
);
export default createIcon(SimCardDownload);
