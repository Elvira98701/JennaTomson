import { motion } from "framer-motion";

import { Slider } from "@/components";

import "./feedbacks.scss";

export const Feedbacks = () => {
  return (
    <section className="feedbacks">
      <div className="feedbacks__inner container">
        <h2 className="feedbacks__title">Feedbacks</h2>
        <motion.div
          className="feedbacks__divider"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
        <Slider />
      </div>
    </section>
  );
};
