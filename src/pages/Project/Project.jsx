import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../../components/pageTransition/PageTransition";
import Cta from "../../components/cta/Cta";
import { PROJECTS } from "../../helpers/constants";

import "./project.scss";

const Project = () => {
  const { id } = useParams();
  const project = PROJECTS.find((project) => project.id === Number(id));

  return (
    <main>
      <PageTransition />
      <div className="single-project container">
        <section className="single-project__banner">
          <motion.h1
            className="single-project__title"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
            }}
          >
            {project.title}
          </motion.h1>
          <p>
            <span>{project.type}</span> &#9675;{" "}
            <time dateTime={project.datetime}>{project.date}</time>
          </p>
          <img
            className="single-project__image"
            src={project.image}
            alt={project.title}
          />
        </section>
        <section className="single-project__about">
          <div className="single-project__block">
            <h2 className="single-project__subtile">Description</h2>
            <p>{project.description}</p>
          </div>
          <div className="single-project__block">
            <h2 className="single-project__subtile">Outcome</h2>
            <p>{project.fullDescription}</p>
          </div>
        </section>
        <Cta />
      </div>
    </main>
  );
};

export default Project;
