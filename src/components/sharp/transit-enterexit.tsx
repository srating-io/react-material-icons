import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const TransitEnterexit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M16 18H6V8h3v4.77L15.98 6 18 8.03 11.15 15H16z" />
  </svg>
);
export default createIcon(TransitEnterexit);
