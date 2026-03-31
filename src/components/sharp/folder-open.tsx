import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const FolderOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 6H12l-2-2H2v16h20zm-2 12H4V8h16z" />
  </svg>
);
export default createIcon(FolderOpen);
