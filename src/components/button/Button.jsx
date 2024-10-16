import { Link } from "react-router-dom";
import "./button.scss";

const Button = ({ link, children }) => {
  return (
    <Link className="button" to={link}>
      <span>{children}</span>
    </Link>
  );
};

export default Button;
