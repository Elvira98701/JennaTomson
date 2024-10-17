import AboutBanner from "../../components/aboutBanner/AboutBanner";
import Cta from "../../components/cta/Cta";
import Experience from "../../components/experience/Experience";
import Metrics from "../../components/metrics/Metrics";
import PageTransition from "../../components/pageTransition/PageTransition";

const About = () => {
  return (
    <main>
      <PageTransition />
      <AboutBanner />
      <Experience />
      <Metrics />
      <Cta />
    </main>
  );
};

export default About;
