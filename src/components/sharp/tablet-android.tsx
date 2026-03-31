import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const TabletAndroid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 0H3v24h18zm-7 22h-4v-1h4zm5.25-3H4.75V3h14.5z" />
  </svg>
);
export default createIcon(TabletAndroid);
