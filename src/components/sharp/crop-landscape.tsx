import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CropLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 5H3v14h18zm-2 12H5V7h14z" />
  </svg>
);
export default createIcon(CropLandscape);
