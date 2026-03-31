import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Segment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M9 18h12v-2H9zM3 6v2h18V6zm6 7h12v-2H9z" />
  </svg>
);
export default createIcon(Segment);
