import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const StayCurrentPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 1.01 5.01 1v22H19zM17 19H7V5h10z" />
  </svg>
);
export default createIcon(StayCurrentPortrait);
