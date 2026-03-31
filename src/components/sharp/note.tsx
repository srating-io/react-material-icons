import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Note = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m22 10-6-6H2v16h20zm-7-4.5 5.5 5.5H15z" />
  </svg>
);
export default createIcon(Note);
