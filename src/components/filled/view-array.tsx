import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ViewArray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 5h-3v14h3zm-4 0H7v14h10zM6 5H3v14h3z" />
  </svg>
);
export default createIcon(ViewArray);
