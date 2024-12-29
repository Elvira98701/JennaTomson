import { motion } from "framer-motion";
import ButtonLink from "../buttonLink/ButtonLink";

import GIRL from "../../assets/images/girl.jpg";
import "./cta.scss";

const Cta = () => {
  return (
    <section className="cta">
      <div className="cta__inner container">
        <motion.h2
          className="cta__title"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            bounce: 0.8,
            duration: 1.5,
            damping: 3,
            stiffness: 50,
            restDelta: 0.001,
          }}
        >
          Get in touch
        </motion.h2>
        <img src={GIRL} alt="girl" className="cta__image" loading="lazy" />
        <ButtonLink link="/contact">Let&apos;s go</ButtonLink>
      </div>
    </section>
  );
};

export default Cta;
