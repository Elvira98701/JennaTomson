import Banner from "../../components/banner/Banner";
import Cta from "../../components/cta/Cta";
import Feedbacks from "../../components/feedbacks/Feedbacks";
import PageTransition from "../../components/pageTransition/PageTransition";
import Partners from "../../components/partners/Partners";
import Services from "../../components/services/Services";
import Works from "../../components/works/Works";

const Home = () => {
  return (
    <main>
      <PageTransition />
      <Banner />
      <Works />
      <Feedbacks />
      <Services />
      <Partners />
      <Cta />
    </main>
  );
};

export default Home;
