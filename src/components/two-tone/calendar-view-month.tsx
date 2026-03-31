import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CalendarViewMonth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path
      d="M4 6h4v5H4zm0 7h4v5H4zm6 0h4v5h-4zm6 0h4v5h-4zm0-7h4v5h-4zm-6 0h4v5h-4z"
      opacity={0.3}
    />
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M8 18H4v-5h4zm0-7H4V6h4zm6 7h-4v-5h4zm0-7h-4V6h4zm6 7h-4v-5h4zm0-7h-4V6h4z" />
  </svg>
);
export default createIcon(CalendarViewMonth);
