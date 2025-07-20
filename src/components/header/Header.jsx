import { useEffect, useState } from "react";

import { MobileNav, Nav } from "@/components";

import "./header.scss";

export const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      if (window.innerWidth <= 750) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

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
