import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CreditCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 4H2.01L2 20h20zm-2 14H4v-6h16zm0-10H4V6h16z" />
  </svg>
);
export default createIcon(CreditCard);
