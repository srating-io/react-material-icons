import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ViewList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path
      d="M7 7v2H5V7zm-2 6v-2h2v2zm0 2h2v2H5zm14 2H9v-2h10zm0-4H9v-2h10zm0-4H9V7h10z"
      opacity={0.3}
    />
    <path d="M3 5v14h18V5zm4 2v2H5V7zm-2 6v-2h2v2zm0 2h2v2H5zm14 2H9v-2h10zm0-4H9v-2h10zm0-4H9V7h10z" />
  </svg>
);
export default createIcon(ViewList);
