import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const VideoChat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M2 2v20l4-4h16V2zm15 11-2-1.99V14H7V6h8v2.99L17 7z" />
  </svg>
);
export default createIcon(VideoChat);
