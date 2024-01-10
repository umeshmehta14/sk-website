import { Flex, Image, Text, VStack } from "@chakra-ui/react";

import {
  excelLogo,
  PythonLogo,
  ReactLogo,
  tallyLogo,
  WebDev,
} from "../../../assets/images";

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
        <VStack width={"100%"} maxW={"400px"}>
          <WebDev />
          <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
            HTML + CSS + VanillaJS
          </Text>
          <Text textAlign={"center"}>
            Get enrolled in our Web Development course so you can shape the
            digital future. To build dynamic, interesting websites, become
            familiar with HTML, CSS, and JavaScript.
          </Text>
        </VStack>

        <VStack width={"100%"} maxW={"400px"}>
          <Image src={PythonLogo} alt="Python" width={"100px"} />
          <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
            Python
          </Text>
          <Text textAlign={"center"}>
            Visit SK Computer Institute to learn more about Python. Find out
            what this flexible language can do for you. It's great for data
            science, web development, and more.
          </Text>
        </VStack>

        <VStack width={"100%"} maxW={"400px"}>
          <ReactLogo />
          <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
            React JS Mastery
          </Text>
          <Text textAlign={"center"}>
            At SK Computer Institute, educate yourself in the world of React JS.
            Learn the skills of current web programming, from creating
            single-page apps to creating interactive user interfaces.
          </Text>
        </VStack>

        <VStack width={"100%"} maxW={"400px"}>
          <Image src={excelLogo} alt="Excel" width={"100px"} />
          <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
            Advance Excel
          </Text>
          <Text textAlign={"center"}>
            Learn Advanced Excel at SK Computer Institute to improve your
            skills. Learn effective methods for data automation, analysis, and
            presentation. Gain expertise to succeed in your career.
          </Text>
        </VStack>

        <VStack width={"100%"} maxW={"400px"}>
          <Image src={tallyLogo} alt="Tally" width={"150px"} />
          <Text fontSize={"1.3rem"} color={"red.500"} fontWeight={"800"}>
            Tally + GST
          </Text>
          <Text textAlign={"center"}>
            At SK Computer Institute, master tally with GST. Get a useful
            certification and in-depth understanding of accounting software to
            launch an attractive finance profession.
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
};
