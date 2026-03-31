import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SouthEast = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10z" />
  </svg>
);
export default createIcon(SouthEast);
