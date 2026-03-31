import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const TextRotationDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 12v-1.5L10 5.75v2.1l2.2.9v5l-2.2.9v2.1zm-7-2.62 5.02 1.87L14 13.12zM6 19.75l3-3H7V4.25H5v12.5H3z" />
  </svg>
);
export default createIcon(TextRotationDown);
