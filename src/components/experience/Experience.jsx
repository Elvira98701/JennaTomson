import { motion } from "framer-motion";
import { PROJECTS } from "../../helpers/constants";

import "./experience.scss";

const Experience = () => {
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
    <section className="experience">
      <div className="experience__inner container">
        <h2 className="experience__title">10 years of experience</h2>
        <motion.ul
          className="experience__list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {PROJECTS.slice(0, 4).map(({ id, title, date, datetime, type }) => (
            <motion.li
              className="experience__item"
              key={id}
              variants={itemVariants}
            >
              <time className="experience__time" dateTime={datetime}>
                {date}
              </time>
              <h3 className="experience__subtitle">{title}</h3>
              <span className="experience__type">&#9675; {type}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Experience;
