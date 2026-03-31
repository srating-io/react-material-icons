import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const MarkunreadMailbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 6H10v6H8V4h6V0H6v6H2v16h20z" />
  </svg>
);
export default createIcon(MarkunreadMailbox);
