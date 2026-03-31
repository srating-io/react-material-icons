import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const FeaturedVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M3 19h18V5H3zM4 6h9v7H4z" opacity={0.3} />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H3V5h18zM4 6h9v7H4z" />
  </svg>
);
export default createIcon(FeaturedVideo);
