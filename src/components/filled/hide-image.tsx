import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const HideImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 5c0-1.1-.9-2-2-2H5.83L21 18.17zM2.81 2.81 1.39 4.22 3 5.83V19c0 1.1.9 2 2 2h13.17l1.61 1.61 1.41-1.41zM6 17l3-4 2.25 3 .82-1.1 2.1 2.1z" />
  </svg>
);
export default createIcon(HideImage);
