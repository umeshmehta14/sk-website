import { Flex, Text, Heading, VStack } from "@chakra-ui/react";

import { svgStyle, whyChooseBox } from "../../../styles/HomeStyles";
import { WhyChooseList } from "../../../utils/utlis";

export const WhyChooseSection = () => {
  return (
    <VStack>
      <Heading fontFamily={"heading2"} textAlign={"center"}>
        Why Choose SK Computer Institute?
      </Heading>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        flexWrap={"wrap"}
        gap={"3rem"}
        m={"auto"}
        w={{ base: "100%", md: "80%" }}
        justifyContent={"space-between"}
      >
        {WhyChooseList.map(({ heading, img, content }) => {
          return (
            <VStack key={heading} {...whyChooseBox}>
              <VStack gap={"1.5rem"} padding={"1rem"} h={"265px"}>
                <Heading {...svgStyle}>{heading}</Heading>
                {img}
              </VStack>
              <VStack gap={"0.5rem"} borderTop={"1px solid gray"} p={"1rem"}>
                <Text>{content[0]}</Text>
                <Text>{content[1]}</Text>
              </VStack>
            </VStack>
          );
        })}
      </Flex>
    </VStack>
  );
};
