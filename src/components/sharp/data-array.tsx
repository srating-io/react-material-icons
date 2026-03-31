import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const DataArray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z" />
  </svg>
);
export default createIcon(DataArray);
