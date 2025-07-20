import { motion } from "framer-motion";

import GIRL from "@/assets/images/girl.avif";
import { ButtonLink } from "@/components";

import "./cta.scss";

export const Cta = () => {
  return (
    <section className="cta">
      <div className="cta__inner container">
        <motion.h2
          className="cta__title"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          Get in touch
        </motion.h2>
        <img
          src={GIRL}
          alt="girl"
          className="cta__image"
          loading="lazy"
          width={400}
          height={433}
        />
        <ButtonLink link="/contact">Let&apos;s go</ButtonLink>
      </div>
    </section>
  );
};
