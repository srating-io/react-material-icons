import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SignalCellularAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17 4h3v16h-3zM5 14h3v6H5zm6-5h3v11h-3z" />
  </svg>
);
export default createIcon(SignalCellularAlt);
