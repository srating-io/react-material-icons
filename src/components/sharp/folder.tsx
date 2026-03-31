import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Folder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M10 4H2v16h20V6H12z" />
  </svg>
);
export default createIcon(Folder);
