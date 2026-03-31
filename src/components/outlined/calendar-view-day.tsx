import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M3 17h18v2H3zm16-5v1H5v-1zm2-2H3v5h18zM3 6h18v2H3z" />
  </svg>
);
export default createIcon(CalendarViewDay);
