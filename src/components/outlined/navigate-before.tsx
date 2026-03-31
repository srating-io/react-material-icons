import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const NavigateBefore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12z" />
  </svg>
);
export default createIcon(NavigateBefore);
