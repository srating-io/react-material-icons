import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const NorthWest = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5z" />
  </svg>
);
export default createIcon(NorthWest);
