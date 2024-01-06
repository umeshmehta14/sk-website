import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

import { SK_LOGO } from "../assets/images";
import { FaGripLines, RxCross1 } from "../assets/Icons";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar2 = () => {
  const [menuClick, setMenuClick] = useState(false);

  const navigate = useNavigate();
  const handleMenuClick = () => {
    setMenuClick(!menuClick);
    document.body.style.overflow = menuClick ? "auto" : "hidden";
  };
  return (
    <Box pos={"relative"} top={0}>
      <Flex
        fontFamily={"heading2"}
        justifyContent={"space-between"}
        borderBottom={{
          base: menuClick ? "1px solid #21212135" : "none",
          md: "none",
        }}
        fontWeight={"900"}
        alignItems={"center"}
        pos={"relative"}
        zIndex={1000}
        bgColor={"#fff5f6"}
        p={{ base: "5vw 4vw", md: "1vw 2vw" }}
        paddingBottom={0}
      >
        <Box display={{ base: "block", md: "none" }}>
          <Image
            src={SK_LOGO}
            alt="Sk Computer"
            w={"4rem"}
            opacity={menuClick ? 0 : 1}
            transition={"all ease 0.2s"}
            onClick={() => navigate("/")}
          />
        </Box>

        <Flex
          display={{ base: "flex", md: "none" }}
          border={"1px solid #acacac"}
          fontWeight={"200"}
          p={"2vw 4vw"}
          borderRadius={"30px"}
          gap={"1rem"}
          onClick={handleMenuClick}
        >
          <Box
            as={menuClick ? RxCross1 : FaGripLines}
            fontSize={"1.5rem"}
            alignItems={"center"}
          />
          <Text>Menu</Text>
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} gap={"0.5rem"}>
          <Image
            src={SK_LOGO}
            alt="Sk Computer"
            w={"6rem"}
            onClick={() => navigate("/")}
          />
          <Flex flexDir={"column"} fontSize={"2.5rem"}>
            <Text textShadow={" 3px 3px 6px #ff8383db"}>SK</Text>
            <Text textShadow={" 3px 3px 6px #ff8383db"}>Computer</Text>
          </Flex>
        </Flex>

        <Flex
          fontSize={"1.2rem"}
          fontWeight={"200"}
          gap={"1.5rem"}
          display={{ base: "none", md: "flex" }}
        >
          <Box className="btn">
            <NavLink to="/courses">Courses</NavLink>
          </Box>
          <Box className="btn">
            <NavLink to="/faq">FAQ</NavLink>
          </Box>
          <Box className="btn">
            <NavLink to="/contactUs">Contact Us</NavLink>
          </Box>
        </Flex>
      </Flex>
      <Box
        display={{ base: "block", md: "none" }}
        pos={"fixed"}
        top={menuClick ? "0" : "-100%"}
        left={0}
        zIndex={999}
        width={"100vw"}
        height={"100vh"}
        backgroundColor={"#0000004e"}
        transition={"all ease 0.4s"}
      >
        <Flex
          height={"45%"}
          width={"100%"}
          backgroundColor={"#fff5f6"}
          borderBottomLeftRadius={"40px"}
          borderBottomRightRadius={"40px"}
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
          flexDirection={"column"}
          p={"9vw 4vw"}
        >
          <Heading
            fontFamily={"heading2"}
            fontSize={"3.2rem"}
            onClick={() => setMenuClick(!menuClick)}
          >
            <NavLink to="/courses">Courses</NavLink>
          </Heading>
          <Heading
            fontFamily={"heading2"}
            fontSize={"3.2rem"}
            onClick={() => setMenuClick(!menuClick)}
          >
            <NavLink to="/faq">FAQ</NavLink>
          </Heading>
          <Heading
            fontFamily={"heading2"}
            fontSize={"3.2rem"}
            onClick={() => setMenuClick(!menuClick)}
          >
            <NavLink to="/contactUs">Contact Us</NavLink>
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};
