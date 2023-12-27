import { Flex, Image, Text, Heading, Button, Box } from "@chakra-ui/react";

import { hero_img } from "../../../assets/images";
import { btn, heroContentMain } from "../../../styles/HomeStyles";

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
    </Flex>
  );
};
