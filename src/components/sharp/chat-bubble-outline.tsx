import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ChatBubbleOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 2H2v20l4-4h16zm-2 14H6l-2 2V4h16z" />
  </svg>
);
export default createIcon(ChatBubbleOutline);
