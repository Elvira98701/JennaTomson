import { motion } from "framer-motion";

import HERO from "../../assets/images/hero.jpg";
import ARROW from "../../assets/icons/arrow-down-right.svg";

import "./banner.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__inner container">
        <div className="banner__grid">
          <div className="banner__col-1">
            <div className="banner__heading-container">
              <h1 className="banner__title">Product</h1>
            </div>
            <img className="banner__icon" src={ARROW} alt="arrow" />
          </div>
          <div className="banner__col-2">
            <motion.img
              className="banner__hero"
              src={HERO}
              alt="hero"
              animate={{
                rotateY: [0, 360, -360],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.8, 0.8],
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
          </div>
          <div className="banner__col-3">
            <div className="banner__description">
              <p className="banner__text">
                I&rsquo;m Jenna Tomson, a&nbsp;product designer who believes
                in&nbsp;crafting elegant, user-friendly solutions that solve
                real problems.
              </p>
            </div>
            <div className="banner__heading-container banner__heading-container_right">
              <h2 className="banner__subtitle">Designer</h2>
            </div>
          </div>
        </div>
        <div className="banner__geometry">
          <motion.div
            className="banner__line"
            initial={{
              width: "0%",
            }}
            whileInView={{
              width: "100%",
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <div className="banner__circle"></div>
          <div className="banner__circle banner__circle_bottom"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
