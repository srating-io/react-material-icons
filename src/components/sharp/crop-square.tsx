import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CropSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M20 4H4v16h16zm-2 14H6V6h12z" />
  </svg>
);
export default createIcon(CropSquare);
