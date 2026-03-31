import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const BookmarkAdded = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="m19 21-7-3-7 3V3h9a5.002 5.002 0 0 0 5 7.9zM17.83 9 15 6.17l1.41-1.41 1.41 1.41 3.54-3.54 1.41 1.41z" />
  </svg>
);
export default createIcon(BookmarkAdded);
