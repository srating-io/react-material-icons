import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Timer10Select = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M13 8v8h-3V8zm3-3H7v14h9zM1 8h2v11h3V5H1zm22 3h-6v5h4v1h-4v2h6v-5h-4v-1h4z" />
  </svg>
);
export default createIcon(Timer10Select);
