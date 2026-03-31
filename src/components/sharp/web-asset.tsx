import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const WebAsset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M3 4v16h18V4zm16 14H5V8h14z" />
  </svg>
);
export default createIcon(WebAsset);
