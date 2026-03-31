import { SVGProps } from "react";
import { createIcon } from "../../Icon";
const AddComment = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    role="img"
    {...props}
  >
    <path d="M22 2H2v16h16l4 4zm-5 9h-4v4h-2v-4H7V9h4V5h2v4h4z" />
  </svg>
);
export default createIcon(AddComment);
