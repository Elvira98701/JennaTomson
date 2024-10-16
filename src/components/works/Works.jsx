import { PROJECTS } from "../../helpers/constants";
import Button from "../button/Button";
import Work from "../work/Work";

import "./works.scss";

const Works = () => {
  return (
    <section className="works">
      <h2 className="workd__title visually-hidden">Works</h2>
      <div className="works__inner container">
        <div className="works__list">
          {PROJECTS.slice(0, 4).map((project) => (
            <Work key={project.id} {...project} />
          ))}
        </div>
        <div className="works__button-wrapper">
          <Button link="/projects">See all projects</Button>
        </div>
      </div>
    </section>
  );
};

export default Works;
