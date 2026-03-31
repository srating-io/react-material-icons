import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Roofing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M11 16h2v2h-2z" opacity={0.3} />
    <path d="M13 18h-2v-2h2zm2-4H9v6h6zm4-4.7V4h-3v2.6L12 3 2 12h3l7-6.31L19 12h3z" />
  </svg>
);
export default createIcon(Roofing);
