import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Cases = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M18 5V3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H5v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5zm-2 0h-4V3h4zM3 9H1v11c0 1.11.89 2 2 2h16v-2H3z" />
  </svg>
);
export default createIcon(Cases);
