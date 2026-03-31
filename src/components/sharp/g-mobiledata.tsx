import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const GMobiledata = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 11v2h2v2H9V9h7V7H7v10h9v-6z" />
  </svg>
);
export default createIcon(GMobiledata);
