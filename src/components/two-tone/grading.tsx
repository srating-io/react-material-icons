import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Grading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M4 7h16v2H4zm0 6h16v-2H4zm0 4h7v-2H4zm0 4h7v-2H4zm11.41-2.83L14 16.75l-1.41 1.41L15.41 21 20 16.42 18.58 15zM4 3v2h16V3z" />
  </svg>
);
export default createIcon(Grading);
