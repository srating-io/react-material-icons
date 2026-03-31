import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SignalCellularNull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M20 6.83V20H6.83zM22 2 2 22h20z" />
  </svg>
);
export default createIcon(SignalCellularNull);
