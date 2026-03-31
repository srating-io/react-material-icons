import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Dataset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path
      d="M5 19h14V5H5zm8-12h4v4h-4zm0 6h4v4h-4zM7 7h4v4H7zm0 6h4v4H7z"
      opacity={0.3}
    />
    <path d="M7 13h4v4H7zm6 0h4v4h-4z" />
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14z" />
    <path d="M7 7h4v4H7zm6 0h4v4h-4z" />
  </svg>
);
export default createIcon(Dataset);
