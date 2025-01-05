import { motion } from "framer-motion";
import { PROJECTS } from "../../helpers/constants";
import Work from "../work/Work";

import "./featuredProjects.scss";

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="featured-projects__inner container">
        <motion.h1
          className="featured-projects__title"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
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
