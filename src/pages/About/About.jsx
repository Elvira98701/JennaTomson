import {
  AboutBanner,
  Cta,
  Experience,
  Metrics,
  PageTransition,
} from "@/components";

export const About = () => {
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
