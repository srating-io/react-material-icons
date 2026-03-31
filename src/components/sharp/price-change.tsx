import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const PriceChange = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 4v16h20V4zm10 6H8v1h4v5h-2v1H8v-1H6v-2h4v-1H6V8h2V7h2v1h2zm4 6.25-2-2h4zM14 10l2-2 2 2z" />
  </svg>
);
export default createIcon(PriceChange);
