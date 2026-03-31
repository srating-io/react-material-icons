import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const DeleteOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M6 21h12V7H6zM8 9h8v10H8zm7.5-5-1-1h-5l-1 1H5v2h14V4z" />
  </svg>
);
export default createIcon(DeleteOutline);
