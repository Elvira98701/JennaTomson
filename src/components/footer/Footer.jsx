import { Link } from "react-router-dom";

import { Logo } from "@/components";
import { MENU, SOCIALS } from "@/constants";

import "./footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__content">
          <Logo />
          <nav className="footer__menu">
            <ul className="footer__list">
              {MENU.map(({ id, name, link }) => (
                <li className="footer__item" key={id}>
                  <Link className="footer__link" to={link}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="footer__socials-list">
            {SOCIALS.map(({ id, image, link, title }) => (
              <li className="footer__socials-item" key={id}>
                <a className="footer__socials-link" href={link} target="_blank">
                  <img
                    className="footer__socials-image"
                    src={image}
                    alt={title}
                    width={24}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
