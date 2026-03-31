import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const BrandingWatermark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M23 3H1v18h22zm-2 16h-9v-6h9z" />
  </svg>
);
export default createIcon(BrandingWatermark);
