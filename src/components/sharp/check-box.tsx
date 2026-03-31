import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CheckBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 3H3v18h18zM10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z" />
  </svg>
);
export default createIcon(CheckBox);
