import { MetricCounter } from "@/components";

import "./metrics.scss";

export const Metrics = () => {
  return (
    <section className="metrics">
      <div className="metrics__inner container">
        <h2 className="metrics__title">
          Here’s a snapshot of my success through some key metrics:
        </h2>
        <ul className="metrics__list">
          <li className="metrics__item">
            <p className="metrics__count">
              <MetricCounter from={1} to={150} />+
            </p>
            <span>Projects Completed</span>
          </li>
          <li className="metrics__item">
            <p className="metrics__count metrics__count_accent">200,000+</p>
            <span>Units Sold</span>
          </li>
          <li className="metrics__item">
            <p className="metrics__count">
              <MetricCounter from={1} to={10} />+
            </p>
            <span>Years of Experience</span>
          </li>
          <li className="metrics__item">
            <p className="metrics__count">
              <MetricCounter from={1} to={50} /> days
            </p>
            <span>Average time to finish project</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
