import { Marquee } from "@/components";
import { LOGOS } from "@/constants";

import "./partners.scss";

export const Partners = () => {
  return (
    <section className="partners">
      <Marquee>
        {LOGOS.map(({ id, image }) => (
          <div className="partners__logo-wrapper" key={id}>
            <img className="partners__logo" src={image} alt="logo" />
          </div>
        ))}
      </Marquee>

      <Marquee reverse>
        {LOGOS.map(({ id, image }) => (
          <div className="partners__logo-wrapper" key={id}>
            <img className="partners__logo" src={image} alt="logo" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};
