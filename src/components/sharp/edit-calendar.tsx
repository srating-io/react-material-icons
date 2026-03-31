import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const EditCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 22H3V4h3V2h2v2h8V2h2v2h3v8h-2v-2H5v10h7zm10.13-5.01 1.41-1.41-2.12-2.12-1.41 1.41zm-.71.71-5.3 5.3H14v-2.12l5.3-5.3z" />
  </svg>
);
export default createIcon(EditCalendar);
