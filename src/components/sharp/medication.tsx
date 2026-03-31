import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Medication = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M6 3h12v2H6zm13 3H5v15h14zm-3 9h-2.5v2.5h-3V15H8v-3h2.5V9.5h3V12H16z" />
  </svg>
);
export default createIcon(Medication);
