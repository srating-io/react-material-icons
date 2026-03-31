import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CropDin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 3H3v18h18zm-2 16H5V5h14z" />
  </svg>
);
export default createIcon(CropDin);
