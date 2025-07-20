import { Link } from "react-router-dom";

import "./buttonLink.scss";

export const ButtonLink = ({ link, children }) => {
  return (
    <Link className="button-link" to={link}>
      <span>{children}</span>
    </Link>
  );
};
