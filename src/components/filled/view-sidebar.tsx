import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ViewSidebar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M16 20H2V4h14zm2-12h4V4h-4zm0 12h4v-4h-4zm0-6h4v-4h-4z" />
  </svg>
);
export default createIcon(ViewSidebar);
