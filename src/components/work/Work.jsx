import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./work.scss";

const cardVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.5,
      damping: 4,
      stiffness: 40,
      restDelta: 0.001,
    },
  },
};

const Work = ({
  id,
  title,
  date,
  datetime,
  description,
  type,
  link,
  image,
}) => {
  return (
    <motion.article
      className="work"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <Link className="work__link" to={link}>
        <motion.div
          className="work__image"
          style={{
            background: `url(${image}) top center / cover no-repeat`,
          }}
          variants={cardVariants}
        />
        <div className="work__content">
          <div className="work__title-wrapper">
            <span className="work__type">{type}</span> &#9675;{" "}
            <time className="work__time" dateTime={datetime}>
              {date}
            </time>
            <h3 className="work__title">{title}</h3>
          </div>
          <p className="work__description">{description}</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default Work;
