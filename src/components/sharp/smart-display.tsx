import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SmartDisplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 4H2v16h20zM9.5 16.5v-9l7 4.5z" />
  </svg>
);
export default createIcon(SmartDisplay);
