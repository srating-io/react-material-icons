import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const PictureInPictureAlt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M19 11h-8v6h8zm4 10V3H1v18zm-2-1.98H3V4.97h18z" />
  </svg>
);
export default createIcon(PictureInPictureAlt);
