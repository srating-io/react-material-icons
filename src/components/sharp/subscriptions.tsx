import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Subscriptions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M20 8H4V6h16zm-2-6H6v2h12zm4 8v12H2V10zm-6 6-6-3.27v6.53z" />
  </svg>
);
export default createIcon(Subscriptions);
