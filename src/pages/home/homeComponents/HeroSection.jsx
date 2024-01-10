import { Flex, Text, Heading, Box } from "@chakra-ui/react";

import { IoIosArrowRoundForward } from "../../../assets/Icons";
// import { btn, heroContentMain } from "../../../styles/HomeStyles";

export const HeroSection = () => {
  return (
    <Flex
      height={{ base: "70vh", md: "80vh" }}
      flexDir={{ base: "column", md: "row-reverse" }}
      padding={"2vw 4vw"}
      gap={"3rem"}
      justifyContent={"space-between"}
      borderBottom={"1px solid gray"}
    >
      <Heading
        fontFamily={"heading2"}
        alignSelf={"flex-end"}
        w={{ base: "60%", md: "40%" }}
        fontSize={{ base: "3rem", md: "7vw" }}
        textAlign={"end"}
      >
        TECH & TRADE Raising Dreams
      </Heading>
      <Flex
        flexDir={"column"}
        alignSelf={{ base: "flex-start", md: "flex-end" }}
        width={{ base: "60%", md: "30%" }}
        alignItems={"center"}
        gap={"1rem"}
      >
        <Flex
          className="btn"
          width={{ base: "70%", md: "45%" }}
          alignItems={"center"}
          justifyContent={"space-between"}
          fontFamily={"heading2"}
          fontWeight={"900"}
        >
          <a href="/">Register Now</a>
          <Box as={IoIosArrowRoundForward} fontSize={"2rem"} />
        </Flex>
        <Text fontSize={"1.2rem"} lineHeight={"1.2"} fontWeight={"600"}>
          Providing professional advice and practical experience to empower
          futures. Come explore with us the limitless prospects in computer
          science and programming.
        </Text>
      </Flex>
    </Flex>
  );
};
// eslint-disable-next-line
{
  /* <Flex flexDir={"column"}>
      <Box className="hero-img">
        <Image
          src={hero_img}
          alt="Not availabe"
          w={"100vw"}
          maxH={"485px"}
          objectFit={"cover"}
        />
      </Box>
      <Flex {...heroContentMain}>
        <Heading display={"flex"} flexWrap={"wrap"} fontFamily={"heading2"}>
          <Box>
            Empower Your Future with{" "}
            <Text display={{ base: "inline", md: "none" }} color={"#fcac15"}>
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
        <Button {...btn}>Register Now</Button>
      </Flex>
    </Flex> */
}
