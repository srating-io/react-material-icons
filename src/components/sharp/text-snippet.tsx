import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const TextSnippet = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m21 9-6-6H3v18h18zM7 7h7v2H7zm10 10H7v-2h10zm0-4H7v-2h10z" />
  </svg>
);
export default createIcon(TextSnippet);
