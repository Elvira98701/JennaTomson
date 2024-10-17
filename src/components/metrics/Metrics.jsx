import "./metrics.scss";

const Metrics = () => {
  return (
    <section className="metrics">
      <div className="metrics__inner container">
        <h2 className="metrics__title">
          Here’s a snapshot of my success through some key metrics:
        </h2>
        <ul className="metrics__list">
          <li className="metrics__item">
            <span className="metrics__count">150+</span>
            <span>Projects Completed</span>
          </li>
          <li className="metrics__item">
            <span className="metrics__count metrics__count_accent">
              200,000+
            </span>
            <span>Units Sold</span>
          </li>
          <li className="metrics__item">
            <span className="metrics__count">10+</span>
            <span>Years of Experience</span>
          </li>
          <li className="metrics__item">
            <span className="metrics__count">50 days</span>
            <span>Average time to finish project</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Metrics;
