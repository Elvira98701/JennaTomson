import {
  PageTransition,
  Banner,
  Works,
  Feedbacks,
  Services,
  Partners,
  Cta,
} from "@/components";

export const Home = () => {
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
