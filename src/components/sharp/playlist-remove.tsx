import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const PlaylistRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M14 10H3v2h11zm0-4H3v2h11zM3 16h7v-2H3zm11.41 6L17 19.41 19.59 22 21 20.59 18.41 18 21 15.41 19.59 14 17 16.59 14.41 14 13 15.41 15.59 18 13 20.59z" />
  </svg>
);
export default createIcon(PlaylistRemove);
