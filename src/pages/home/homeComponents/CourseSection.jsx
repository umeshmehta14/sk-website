import { Flex, Text, VStack } from "@chakra-ui/react";

import {
  ExcelLogo,
  PythonLogo,
  ReactLogo,
  TallyLogo,
  WebDev,
} from "../../../assets/images";

const topCourses = [
  {
    name: "HTML + CSS + VanillaJS",
    content:
      "Get enrolled in our Web Development course so you can shape the digital future. To build dynamic, interesting websites, become familiar with HTML, CSS, and JavaScript.",
    Img: WebDev,
  },
  {
    name: "Python",
    content:
      "Visit SK Computer Institute to learn more about Python. Find out what this flexible language can do for you. It's great for data science, web development, and more.",
    Img: PythonLogo,
  },
  {
    name: "React JS Mastery",
    content:
      "At SK Computer Institute, educate yourself in the world of React JS. Learn the skills of current web programming, from creating single-page apps to creating interactive user interfaces.",
    Img: ReactLogo,
  },
  {
    name: "Advance Excel",
    content:
      "Learn Advanced Excel at SK Computer Institute to improve your skills. Learn effective methods for data automation, analysis, and presentation. Gain expertise to succeed in your career.",
    Img: ExcelLogo,
  },
  {
    name: "Tally + GST",
    content:
      "At SK Computer Institute, master tally with GST. Get a useful certification and in-depth understanding of accounting software to launch an attractive finance profession.",
    Img: TallyLogo,
  },
];

export const CourseSection = () => {
  return (
    <Flex flexDir={"column"} gap={"1rem"} w={"80%"} m={"auto"}>
      <VStack gap={"1.5rem"}>
        <Text
          fontSize={{ base: "1.5rem", md: "2rem" }}
          fontFamily={"heading2"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Top-Rated Courses for Achievement
        </Text>
        <hr className="home-hr" />
      </VStack>

      <Flex
        flexWrap={"wrap"}
        marginTop={"0.6rem"}
        gap={"1.8rem"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        {topCourses.map(({ name, content, Img }) => {
          return (
            <VStack width={"100%"} maxW={"400px"} key={name}>
              <Img />
              <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
                {name}
              </Text>
              <Text textAlign={"center"}>{content}</Text>
            </VStack>
          );
        })}
      </Flex>
    </Flex>
  );
};
