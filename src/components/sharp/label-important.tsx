import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const LabelImportant = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7z" />
  </svg>
);
export default createIcon(LabelImportant);
