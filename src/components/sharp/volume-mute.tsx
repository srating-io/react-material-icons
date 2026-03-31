import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const VolumeMute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M7 9v6h4l5 5V4l-5 5z" />
  </svg>
);
export default createIcon(VolumeMute);
