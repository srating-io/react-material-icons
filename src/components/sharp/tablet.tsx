import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Tablet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M23 4H1v16h21.99zm-4 14H5V6h14z" />
  </svg>
);
export default createIcon(Tablet);
