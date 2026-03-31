import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const HorizontalSplit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M3 19h18v-6H3zm0-8h18V9H3zm0-6v2h18V5z" />
  </svg>
);
export default createIcon(HorizontalSplit);
