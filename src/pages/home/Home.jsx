import { CourseSection, HeroSection, WhyChooseSection } from "../index";
import { Flex } from "@chakra-ui/react";
import "./home.css";
import { AboutUsSection } from "./homeComponents/AboutUsSection";
import { FeaturedCourse } from "./homeComponents/FeaturedCourse";

export const Home = () => {
  return (
    <Flex flexDir={"column"} gap={"2rem"} data-scroll-section>
      <HeroSection />
      <CourseSection />
      <WhyChooseSection />

      <div className="motion-text">
        <div className="con">
          <h1>INNOVATION</h1>
          <div className="circle"></div>
          <h1>EXPERTISE</h1>
          <div className="circle"></div>

          <h1>EMPOWERMENT</h1>
          <div className="circle"></div>
        </div>
        <div className="con">
          <h1>INNOVATION</h1>
          <div className="circle"></div>
          <h1>EXPERTISE</h1>
          <div className="circle"></div>
          <h1>EMPOWERMENT</h1>
          <div className="circle"></div>
        </div>
        <div className="con">
          <h1>INNOVATION</h1>
          <div className="circle"></div>
          <h1>EXPERTISE</h1>
          <div className="circle"></div>
          <h1>EMPOWERMENT</h1>
          <div className="circle"></div>
        </div>
      </div>
      <AboutUsSection />
      <FeaturedCourse />
    </Flex>
  );
};
