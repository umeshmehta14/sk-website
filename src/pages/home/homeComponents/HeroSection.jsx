import { Flex, Image, Text, Heading, Button, Box } from "@chakra-ui/react";

import { hero_img } from "../../../assets/images";

export const HeroSection = () => {
  return (
    <Flex flexDir={"column"}>
      <Box className="hero-img">
        <Image
          src={hero_img}
          alt="Not availabe"
          w={"100vw"}
          maxH={"485px"}
          objectFit={"cover"}
        />
      </Box>
      <Flex
        flexDir={"column"}
        p="1rem"
        gap={{ base: "0.5rem", md: "1rem" }}
        backgroundColor={{ base: "whitesmoke", md: "transparent" }}
        boxShadow={{ base: " 0px 5px 20px #80808063", md: "none" }}
        pos={{ base: "static", md: "absolute" }}
        color={{ base: "black", md: "white" }}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        w={{ base: "100%", md: "50%" }}
        maxW={"650px"}
        m={{ base: "0", md: "8rem 0 0 6rem" }}
      >
        <Heading display={"flex"} flexWrap={"wrap"} fontFamily={"heading2"}>
          <Box>
            Empower Your Future with{" "}
            <Text
              display={{ base: "inline", md: "none" }}
              color={" #fcac15"}
              className="hero-name"
            >
              SK Computer
            </Text>{" "}
            <Text display={{ base: "inline", md: "none" }}>Institute</Text>
          </Box>
          <Flex gap={"0.5rem"} display={{ base: "none", md: "flex" }}>
            <Text color={"#fcac15"}>SK Computer</Text>
            <Text>Institute</Text>
          </Flex>
        </Heading>
        <Text>
          Providing professional advice and practical experience to empower
          futures. Come explore with us the limitless prospects in computer
          science and programming.
        </Text>

        <Button
          backgroundColor="#ffe500"
          borderRadius="22px"
          w="fit-content"
          m="auto"
          p="1.5rem 1.7rem"
          fontSize="1.2rem"
        >
          Register Now
        </Button>
      </Flex>
    </Flex>
  );
};
