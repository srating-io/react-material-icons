import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CalendarToday = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 3h-3V1h-2v2H7V1H5v2H2v20h20zm-2 18H4V8h16z" />
  </svg>
);
export default createIcon(CalendarToday);
