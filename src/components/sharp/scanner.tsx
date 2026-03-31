import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Scanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m4.2 5-.7 1.9L17.6 12H3v8h18v-8.86zM7 17H5v-2h2zm12 0H9v-2h10z" />
  </svg>
);
export default createIcon(Scanner);
