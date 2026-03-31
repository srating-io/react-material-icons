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
    <path d="M5 20h14v-2H5zm0-10h4v6h6v-6h4l-7-7z" />
  </svg>
);
export default createIcon(Upload);
