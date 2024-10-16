import Cta from "../../components/cta/Cta";
import FeaturedProjects from "../../components/featuredProjects/FeaturedProjects";
import PageTransition from "../../components/pageTransition/PageTransition";

const Projects = () => {
  return (
    <main>
      <PageTransition />
      <FeaturedProjects />
      <Cta />
    </main>
  );
};

export default Projects;
