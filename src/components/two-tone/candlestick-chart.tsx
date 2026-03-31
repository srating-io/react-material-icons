import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const CandlestickChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M9 4H7v2H5v12h2v2h2v-2h2V6H9zm0 12H7V8h2z" />
    <path d="M7 8h2v8H7zm8 2h2v3h-2z" opacity={0.3} />
    <path d="M19 8h-2V4h-2v4h-2v7h2v5h2v-5h2zm-2 5h-2v-3h2z" />
  </svg>
);
export default createIcon(CandlestickChart);
