import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CameraOutdoor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M18 14v-2h-6v6h6v-2l2 1.06v-4.12zM12 3 4 9v12h16v-2H6v-9l6-4.5 6 4.5v1h2V9z" />
  </svg>
);
export default createIcon(CameraOutdoor);
