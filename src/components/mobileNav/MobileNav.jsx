import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MENU } from "../../helpers/constants";
import Logo from "../logo/Logo";

import "./mobile-nav.scss";

const MobileNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (isOpenMenu) {
      document.documentElement.classList.add("popup-opened");
    } else {
      document.documentElement.classList.remove("popup-opened");
    }
  }, [isOpenMenu]);

  return (
    <div className="mobile">
      <Logo />
      <button
        className="mobile__open-btn"
        onClick={() => setIsOpenMenu(true)}
      ></button>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.nav
            className="mobile__nav"
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
          >
            <ul className="mobile__list">
              {MENU.map(({ id, name, link }) => (
                <li className="mobile__item" key={id}>
                  <Link
                    className="mobile__link"
                    to={link}
                    onClick={() => setIsOpenMenu(false)}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="mobile__close-btn"
              onClick={() => setIsOpenMenu(false)}
            ></button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
