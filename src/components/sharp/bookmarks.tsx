import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const Bookmarks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m19 18 2 1V1H7v2h12zM17 5H3v18l7-3 7 3z" />
  </svg>
);
export default createIcon(Bookmarks);
