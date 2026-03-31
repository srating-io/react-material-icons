import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const WidthNormal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 4H2v16h20zM4 6h4v12H4zm16 12h-4V6h4z" />
  </svg>
);
export default createIcon(WidthNormal);
