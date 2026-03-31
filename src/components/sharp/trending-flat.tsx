import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const TrendingFlat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m22 12-4-4v3H3v2h15v3z" />
  </svg>
);
export default createIcon(TrendingFlat);
