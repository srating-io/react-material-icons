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
    <path d="m14.2 6-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
  </svg>
);
export default createIcon(NavigateBefore);
