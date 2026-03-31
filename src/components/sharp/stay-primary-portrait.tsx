import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const StayPrimaryPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M5.01 1v22H19V1zM17 19H7V5h10z" />
  </svg>
);
export default createIcon(StayPrimaryPortrait);
