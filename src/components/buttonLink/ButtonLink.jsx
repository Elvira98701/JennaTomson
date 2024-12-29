import { Link } from "react-router-dom";

import "./buttonLink.scss";

const ButtonLink = ({ link, children }) => {
  return (
    <Link className="button-link" to={link}>
      <span>{children}</span>
    </Link>
  );
};

export default ButtonLink;
