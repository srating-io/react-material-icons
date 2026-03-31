import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const LaptopMac = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m20 18 1.99-2L22 3H2v13l2 2H0v2h24v-2zM4 5h16v11H4zm8 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
  </svg>
);
export default createIcon(LaptopMac);
