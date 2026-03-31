import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Brightness1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
  </svg>
);
export default createIcon(Brightness1);
