import { Heading, Image, Flex, Text, Box } from "@chakra-ui/react";
import { side_img } from "../../../assets/images";

export const AboutUsSection = () => {
  return (
    <Flex
      id="aboutUs"
      flexDir={{ base: "column", md: "row" }}
      gap={"4rem"}
      padding={"2vw 4vw"}
      justifyContent={"space-between"}
      minH={{ base: "80vh", md: "90vh" }}
      alignItems={{ base: "flex-start", md: "center" }}
    >
      <Heading
        fontSize={{ base: "7vw", md: "3.5vw" }}
        fontFamily={"heading2"}
        lineHeight={{ base: "8.2vw", md: "3.5vw" }}
        width={{ base: "100%", md: "50%" }}
        alignSelf={"flex-start"}
      >
        SK Computer, an innovative technical programming institute in Indore,
        was established in 2012. With a focus on accounting and computer
        languages, it is a significant institution in the industry.
      </Heading>
      <Flex
        flexDir={"column"}
        width={{ base: "70%", md: "25%" }}
        gap={"2rem"}
        alignItems={"center"}
        alignSelf={{ base: "flex-start", md: "flex-end" }}
      >
        <Image
          src={side_img}
          alt="SK Computer"
          width={"100%"}
          borderRadius={"12px"}
        />
        <Text lineHeight={{ base: "4.5vw", md: "1.5vw" }}>
          At SK Computer, We Go Above And Beyond The Conventional Educational
          Models By Providing Thorough Training In Interview Techniques And Job
          Skills. This Way, We Make Sure That Our Students Have Both The
          Technical Know-how And Soft Skills They Need To Succeed In The
          Workplace.
        </Text>
      </Flex>
    </Flex>
  );
};
