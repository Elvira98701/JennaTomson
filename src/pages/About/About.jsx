import AboutBanner from "../../components/aboutBanner/AboutBanner";
import Cta from "../../components/cta/Cta";
import PageTransition from "../../components/pageTransition/PageTransition";

const About = () => {
  return (
    <main>
      <PageTransition />
      <AboutBanner />
      <Cta />
    </main>
  );
};

export default About;
