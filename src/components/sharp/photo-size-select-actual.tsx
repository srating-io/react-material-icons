import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const PhotoSizeSelectActual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M23 3H1v18h22zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6z" />
  </svg>
);
export default createIcon(PhotoSizeSelectActual);
