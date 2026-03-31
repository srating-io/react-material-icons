import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Upload = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M9 16h6v-6h4l-7-7-7 7h4zm3-10.17L14.17 8H13v6h-2V8H9.83zM5 18h14v2H5z" />
  </svg>
);
export default createIcon(Upload);
