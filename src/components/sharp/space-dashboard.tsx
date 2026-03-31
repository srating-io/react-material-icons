import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const SpaceDashboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M11 21H3V3h8zm2 0h8v-9h-8zm8-11V3h-8v7z" />
  </svg>
);
export default createIcon(SpaceDashboard);
