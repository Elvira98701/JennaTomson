import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Logo } from "@/components";
import { MENU } from "@/constants";

import "./mobile-nav.scss";

export const MobileNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    if (isOpenMenu) {
      document.documentElement.classList.add("popup-opened");
    } else {
      document.documentElement.classList.remove("popup-opened");
    }
  }, [isOpenMenu]);

  const visible = {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible,
  };

  return (
    <div className="mobile">
      <Logo />
      <button
        className="mobile__open-btn"
        onClick={() => setIsOpenMenu(true)}
        type="button"
        title="open menu"
      ></button>
      <AnimatePresence>
        {isOpenMenu && (
          <motion.nav
            className="mobile__nav"
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
          >
            <motion.ul
              className="mobile__list"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 1 } }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2, delayChildren: 0.3 },
                },
              }}
            >
              {MENU.map(({ id, name, link }) => (
                <motion.li
                  className="mobile__item"
                  key={id}
                  variants={itemVariants}
                >
                  <Link
                    className="mobile__link"
                    to={link}
                    onClick={() => setIsOpenMenu(false)}
                  >
                    {name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <button
              className="mobile__close-btn"
              onClick={() => setIsOpenMenu(false)}
              type="button"
            ></button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
