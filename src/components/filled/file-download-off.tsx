import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const FileDownloadOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M9 6.17V3h6v6h4l-3.59 3.59zm12.19 15.02L2.81 2.81 1.39 4.22 6.17 9H5l7 7 .59-.59L15.17 18H5v2h12.17l2.61 2.61z" />
  </svg>
);
export default createIcon(FileDownloadOff);
