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
    <path d="M10 8.64v6.72L15.27 12z" opacity={0.3} />
    <path d="m8 19 11-7L8 5zm2-10.36L15.27 12 10 15.36z" />
  </svg>
);
export default createIcon(PlayArrow);
