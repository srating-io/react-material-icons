import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Mms = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 2H2v20l4-4h16zM5 14l3.5-4.5 2.5 3.01L14.5 8l4.5 6z" />
  </svg>
);
export default createIcon(Mms);
