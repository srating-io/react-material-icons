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
    <path d="M23 3H1v18h22zm-11 9H3V5h9z" />
  </svg>
);
export default createIcon(FeaturedVideo);
