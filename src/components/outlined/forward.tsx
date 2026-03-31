import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Forward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M14 8.83 17.17 12 14 15.17V14H6v-4h8zM12 4v4H4v8h8v4l8-8z" />
  </svg>
);
export default createIcon(Forward);
