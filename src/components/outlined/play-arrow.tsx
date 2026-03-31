import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const PlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M10 8.64 15.27 12 10 15.36zM8 5v14l11-7z" />
  </svg>
);
export default createIcon(PlayArrow);
