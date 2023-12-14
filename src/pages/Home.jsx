import { Flex, Image } from "@chakra-ui/react";
import hero_img from "../assets/images/hero_img.jpg";

export const Home = () => {
  return (
    <div>
      <Flex>
        <Image
          src={hero_img}
          alt="Not availabe"
          w={"100vw"}
          maxH={"485px"}
          objectFit={"cover"}
        />
      </Flex>
    </div>
  );
};
