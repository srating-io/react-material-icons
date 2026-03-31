import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const AddToHomeScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M20 1.01 6 1v5h2V5h10v14H8v-1H6v5h14zM10 15h2V8H5v2h3.59L3 15.59 4.41 17 10 11.41z" />
  </svg>
);
export default createIcon(AddToHomeScreen);
