import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const VideoCall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M17 10.5V6H3v12h14v-4.5l4 4v-11zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3z" />
  </svg>
);
export default createIcon(VideoCall);
