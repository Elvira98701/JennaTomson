import { useEffect, useState } from "react";
import Nav from "../nav/Nav";
import MobileNav from "../mobileNav/MobileNav";

import "./header.scss";

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  const checkMobileView = () => {
    if (window.innerWidth <= 750) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  };

  useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__inner container">
        {isMobileView ? <MobileNav /> : <Nav />}
      </div>
    </header>
  );
};

export default Header;
