import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SouthWest = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10z" />
  </svg>
);
export default createIcon(SouthWest);
