import { CourseSection, HeroSection, WhyChooseSection } from "../index";
import { Flex } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Flex flexDir={"column"} gap={"4rem"}>
      <HeroSection />
      <CourseSection />
      <WhyChooseSection />
    </Flex>
  );
};
