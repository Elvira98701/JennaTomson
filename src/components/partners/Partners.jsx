import { LOGOS } from "@/constants";

import "./partners.scss";

export const Partners = () => {
  return (
    <section className="partners">
      <div className="partners__inner">
        {LOGOS.map(({ id, image }) => (
          <div className="partners__logo-wrapper" key={id}>
            <img className="partners__logo" src={image} alt="logo" />
          </div>
        ))}
      </div>
    </section>
  );
};
