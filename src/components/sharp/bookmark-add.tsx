import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const BookmarkAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M21 7h-2v2h-2V7h-2V5h2V3h2v2h2zm-2 14-7-3-7 3V3h9a5.002 5.002 0 0 0 5 7.9z" />
  </svg>
);
export default createIcon(BookmarkAdd);
