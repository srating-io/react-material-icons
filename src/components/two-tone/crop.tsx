import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Crop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M5 17c0 1.1.9 2 2 2h10v4h2v-4h4v-2H7V1H5v4H1v2h4zm14-2V7c0-1.1-.9-2-2-2H9v2h8v8z" />
  </svg>
);
export default createIcon(Crop);
