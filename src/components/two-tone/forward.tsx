import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Forward = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M14 14v1.17L17.17 12 14 8.83V10H6v4z" opacity={0.3} />
    <path d="m20 12-8-8v4H4v8h8v4zM6 14v-4h8V8.83L17.17 12 14 15.17V14z" />
  </svg>
);
export default createIcon(Forward);
