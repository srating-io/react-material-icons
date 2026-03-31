import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Icon30Fps = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 5v3h6v2.5H3v3h5V16H2v3h9V5zm17 3v8h-4V8zm3-3H12v14h10z" />
  </svg>
);
export default createIcon(Icon30Fps);
