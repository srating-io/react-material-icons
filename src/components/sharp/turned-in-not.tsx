import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const TurnedInNot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 3H5.01L5 21l7-3 7 3zm-2 15-5-2.18L7 18V5h10z" />
  </svg>
);
export default createIcon(TurnedInNot);
