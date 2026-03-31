import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const VerticalShades = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M20 19V3H4v16H2v2h20v-2zm-10 0V5h4v14z" />
  </svg>
);
export default createIcon(VerticalShades);
