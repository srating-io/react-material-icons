import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const ChangeHistory = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M12 7.77 5.61 18h12.78z" opacity={0.3} />
    <path d="M12 4 2 20h20zm0 3.77L18.39 18H5.61z" />
  </svg>
);
export default createIcon(ChangeHistory);
