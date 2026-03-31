import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SignalCellular4Bar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 22h20V2z" />
  </svg>
);
export default createIcon(SignalCellular4Bar);
