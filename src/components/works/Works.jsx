import { ButtonLink, Work } from "@/components";
import { PROJECTS } from "@/constants";

import "./works.scss";

export const Works = () => {
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
          <ButtonLink link="/projects">See all projects</ButtonLink>
        </div>
      </div>
    </section>
  );
};
