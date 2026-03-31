import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Label = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17.03 5 3 5.01v13.98l14.03.01L22 12z" />
  </svg>
);
export default createIcon(Label);
