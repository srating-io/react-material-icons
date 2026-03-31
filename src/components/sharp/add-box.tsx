import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const AddBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 3H3v18h18zm-4 10h-4v4h-2v-4H7v-2h4V7h2v4h4z" />
  </svg>
);
export default createIcon(AddBox);
