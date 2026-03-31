import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ClearAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M5 13h14v-2H5zm-2 4h14v-2H3zM7 7v2h14V7z" />
  </svg>
);
export default createIcon(ClearAll);
