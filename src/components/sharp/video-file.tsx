import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const VideoFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M14 2H4v20h16V8zm-1 7V3.5L18.5 9zm1 5 2-1.06v4.12L14 16v2H8v-6h6z" />
  </svg>
);
export default createIcon(VideoFile);
