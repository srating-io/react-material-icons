import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Splitscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M18 4v5H6V4zm2-2H4v9h16zm-2 13v5H6v-5zm2-2H4v9h16z" />
  </svg>
);
export default createIcon(Splitscreen);
