import { Fragment } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Logo } from "@/components";
import { MENU } from "@/constants";

import "./nav.scss";

export const Nav = () => {
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
    <nav className="menu">
      <motion.ul
        className="menu__list"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          visible: { transition: { staggerChildren: 0.3, delayChildren: 1.5 } },
        }}
      >
        {MENU.map(({ id, name, link }, i) =>
          i === 2 ? (
            <Fragment key={id}>
              <li className="menu__item">
                <Logo />
              </li>
              <motion.li className="menu__item" variants={itemVariants}>
                <Link to={link} className="menu__link">
                  <span className="menu__text">{name}</span>
                </Link>
              </motion.li>
            </Fragment>
          ) : (
            <motion.li key={id} className="menu__item" variants={itemVariants}>
              <Link to={link} className="menu__link">
                <span className="menu__text">{name}</span>
              </Link>
            </motion.li>
          )
        )}
      </motion.ul>
    </nav>
  );
};
