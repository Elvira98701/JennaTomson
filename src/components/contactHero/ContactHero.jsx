import { motion } from "framer-motion";

import HERO from "../../assets/images/hero.jpg";
import GIRL2 from "../../assets/images/girl2.jpg";
import "./contactHero.scss";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero__inner container">
        <motion.h1
          className="contact-hero__title"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            bounce: 0.8,
            duration: 1.5,
            damping: 3,
            stiffness: 50,
            restDelta: 0.001,
            delay: 1.5,
          }}
        >
          Send message
        </motion.h1>
        <motion.img
          className="contact-hero__image"
          src={HERO}
          alt="girl"
          initial={{
            y: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: 100,
            rotate: 15,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "backOut",
            delay: 2.5,
          }}
        />
        <motion.img
          className="contact-hero__image contact-hero__image-left "
          src={GIRL2}
          alt="girl"
          initial={{
            y: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: 10,
            x: -120,
            rotate: -30,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "backOut",
            delay: 3,
          }}
        />
        <motion.div
          className="contact-hero__line"
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default ContactHero;
