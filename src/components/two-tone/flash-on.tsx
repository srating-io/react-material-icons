import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const FlashOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17 10h-4l3-8H7v11h3v9z" />
  </svg>
);
export default createIcon(FlashOn);
