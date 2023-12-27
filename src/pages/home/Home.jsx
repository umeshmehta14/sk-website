import { CourseSection, HeroSection, WhyChooseSection } from "../index";

export const Home = () => {
  return (
    <main className="home-container">
      <HeroSection />
      <CourseSection />
      <WhyChooseSection />
    </main>
  );
};
