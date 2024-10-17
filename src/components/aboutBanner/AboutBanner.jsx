import { motion } from "framer-motion";

import "./aboutBanner.scss";
import HERO from "../../assets/images/hero.jpg";

const AboutBanner = () => {
  return (
    <section className="about-banner">
      <div className="about-banner__inner container">
        <div className="about-banner__content">
          <h1 className="about-banner__title">
            Jenna{" "}
            <motion.img
              className="about-banner__image"
              src={HERO}
              alt="hero"
              initial={{ rotateX: 0 }}
              whileInView={{ rotateX: 720 }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 2,
              }}
            />{" "}
            Tomson
          </h1>
          <p className="about-banner__description">
            I&rsquo;m Jenna Tomson, a&nbsp;
            <motion.span
              className="about-banner__color"
              initial={{ color: "#FFF" }}
              animate={{ color: "#112033" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 2.5,
              }}
            >
              product designer
            </motion.span>{" "}
            who believes in&nbsp;crafting elegant, user-friendly solutions that
            solve real problems.
          </p>
        </div>
        <motion.div
          className="about-banner__line"
          initial={{
            width: "0%",
          }}
          whileInView={{
            width: "100%",
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
        <div className="about-banner__circle" />
      </div>
    </section>
  );
};

export default AboutBanner;
