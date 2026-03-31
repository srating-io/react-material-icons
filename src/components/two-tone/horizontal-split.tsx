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
    <path d="M19 15v2H5v-2zm2-10H3v2h18zm0 4H3v2h18zm0 4H3v6h18z" />
    <path d="M5 15h14v2H5z" opacity={0.3} />
  </svg>
);
export default createIcon(HorizontalSplit);
