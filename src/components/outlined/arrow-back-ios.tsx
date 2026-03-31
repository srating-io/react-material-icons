import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ArrowBackIos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17.51 3.87 15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12z" />
  </svg>
);
export default createIcon(ArrowBackIos);
