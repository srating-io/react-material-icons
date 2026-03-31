import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const VideoStable = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 4v16h20V4zm2 14V6h2.95l-2.33 8.73L16.82 18zm16 0h-2.95l2.34-8.73L7.18 6H20z" />
  </svg>
);
export default createIcon(VideoStable);
