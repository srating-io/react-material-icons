import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Drafts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21.99 6.86 12 1 2 6.86V20h20zM12 13 3.74 7.84 12 3l8.26 4.84z" />
  </svg>
);
export default createIcon(Drafts);
