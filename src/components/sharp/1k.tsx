import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Icon1K = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 3H3v18h18zM10 15H8.5v-4.5H7V9h3zm7 0h-1.75l-1.75-2.25V15H12V9h1.5v2.25L15.25 9H17l-2.25 3z" />
  </svg>
);
export default createIcon(Icon1K);
