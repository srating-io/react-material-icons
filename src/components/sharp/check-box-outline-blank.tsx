import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CheckBoxOutlineBlank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 5v14H5V5zm2-2H3v18h18z" />
  </svg>
);
export default createIcon(CheckBoxOutlineBlank);
