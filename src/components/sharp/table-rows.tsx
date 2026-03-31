import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const TableRows = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 8H3V4h18zm0 2H3v4h18zm0 6H3v4h18z" />
  </svg>
);
export default createIcon(TableRows);
