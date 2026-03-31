import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Airplay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M6 22h12l-6-6zM23 3H1v16h6v-2H3V5h18v12h-4v2h6z" />
  </svg>
);
export default createIcon(Airplay);
