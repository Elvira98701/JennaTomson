import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import PLUS from "@/assets/icons/plus.svg";

export const Accordion = ({
  i,
  expanded,
  setExpanded,
  title,
  description = [],
  image,
}) => {
  const [isHover, setHover] = useState(false);
  const isOpen = i === expanded;

  return (
    <>
      <motion.h3
        className="services__subtitle"
        onClick={() => setExpanded(isOpen ? false : i)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span className="services__number">(0{i + 1})</span>
        {title}
        <motion.img
          className="services__icon"
          src={PLUS}
          alt="plus"
          width={32}
          height={32}
          initial={false}
          animate={{
            rotate: isOpen ? 45 : 0,
          }}
        />
        <AnimatePresence initial={false}>
          {isHover && (
            <motion.img
              className="services__image"
              src={image}
              alt={title}
              initial={{
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                rotate: -5,
                opacity: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 0.7,
              }}
              loading="lazy"
            />
          )}
        </AnimatePresence>
      </motion.h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="services__card"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: "auto",
              },
              collapsed: {
                opacity: 0,
                height: 0,
              },
            }}
            transition={{
              duration: 0.8,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
          >
            <motion.ul
              variants={{
                collapsed: {
                  scale: 0.8,
                },
                open: {
                  scale: 1,
                },
              }}
              transition={{
                duration: 0.8,
              }}
              className="services__list"
            >
              {description.map((description, index) => (
                <li className="services__item" key={index}>
                  {description}
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
