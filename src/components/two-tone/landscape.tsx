import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Landscape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M5 16h3.04l-1.52-2.03z" opacity={0.3} />
    <path d="m9.78 11.63 1.25 1.67L14 9.33 19 16h-8.46l-4.01-5.37L1 18h22L14 6zM5 16l1.52-2.03L8.04 16z" />
  </svg>
);
export default createIcon(Landscape);
