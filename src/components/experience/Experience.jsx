import { PROJECTS } from "../../helpers/constants";
import "./experience.scss";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience__inner container">
        <h2 className="experience__title">10 years of experience</h2>
        <ul className="experience__list">
          {PROJECTS.slice(0, 4).map(({ id, title, date, datetime, type }) => (
            <li className="experience__item" key={id}>
              <time className="experience__time" dateTime={datetime}>
                {date}
              </time>
              <h3 className="experience__subtitle">{title}</h3>
              <span className="experience__type">&#9675; {type}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
