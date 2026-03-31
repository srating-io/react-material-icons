import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const LiveTv = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M23 6h-9.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H1v16h22zm-2 14H3V8h18zM9 10v8l7-4z" />
  </svg>
);
export default createIcon(LiveTv);
