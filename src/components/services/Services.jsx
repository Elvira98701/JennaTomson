import { useState } from "react";

import { SERVICES } from "@/constants";

import { Accordion } from "./Accordion";

import "./services.scss";

export const Services = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="services">
      <h2 className="services__title">
        Explore services &#10041; Explore services &#10041; Explore services
        &#10041; Explore services
      </h2>
      <div className="services__inner container">
        <div className="services__wrapper">
          {SERVICES.map(({ id, title, description, image }) => (
            <Accordion
              key={id}
              i={id}
              expanded={expanded}
              setExpanded={setExpanded}
              title={title}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
