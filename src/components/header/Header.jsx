import { useEffect, useState } from "react";
import Nav from "../nav/Nav";

import "./header.scss";
import MobileNav from "../mobileNav/MobileNav";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const updateMobile = () => {
    if (window.innerWidth <= 750) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__inner container">
        {isMobile ? <MobileNav /> : <Nav />}
      </div>
    </header>
  );
};

export default Header;
