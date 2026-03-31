import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const AreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path
      d="m19 16.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19z"
      opacity={0.3}
    />
    <path d="m17 7-5-4-5 7-4-3v13h18V7zm2 9.95-7-5.45L8 17l-3-2.4V11l2.44 1.83 4.96-6.95L16.3 9H19z" />
  </svg>
);
export default createIcon(AreaChart);
