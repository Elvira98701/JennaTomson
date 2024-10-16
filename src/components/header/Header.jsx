import Nav from "../nav/Nav";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Nav />
      </div>
    </header>
  );
};

export default Header;
