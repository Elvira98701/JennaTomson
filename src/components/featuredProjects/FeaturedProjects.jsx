import { PROJECTS } from "../../helpers/constants";
import Work from "../work/Work";
import { motion } from "framer-motion";

import "./featuredProjects.scss";

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="featured-projects__inner container">
        <motion.h1
          className="featured-projects__title"
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
          Projects
        </motion.h1>
        <div className="featured-projects__list">
          {PROJECTS.map((project) => (
            <Work key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
