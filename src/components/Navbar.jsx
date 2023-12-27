import { Flex, Image, Heading } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

import { GiHamburgerMenu, RxCross1 } from "../assets/Icons";
import SK_LOGO from "../assets/images/SK_LOGO.png";
import {
  getSmStyle,
  getStyle,
  headingMain,
  mdNavlink,
  navigation,
  smNavilink,
} from "../styles/NavbarStyle";
import { useData } from "../contexts/DataContext";
import { smLinkList } from "../utils/utlis";

export const Navbar = () => {
  const { hamburger, setHamburger } = useData();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Flex {...navigation}>
        <Flex
          onClick={() => {
            navigate("/");
            setHamburger(false);
          }}
          {...headingMain}
        >
          <Image
            src={SK_LOGO}
            alt="Sk Computer"
            w={{ base: "2.4rem", md: "2.8rem" }}
          />
          <Heading fontSize={{ base: "2rem", md: "2.5rem" }} color={"black"}>
            SK Computer
          </Heading>
        </Flex>
        <Flex
          {...smNavilink}
          w={hamburger ? "55vw" : "0"}
          transition={"width 0.5s ease-in-out"}
        >
          {smLinkList.map(({ redirect, name }) => {
            return (
              <NavLink
                to={redirect}
                className={hamburger ? "sm-navlink" : "none-sm-navlink"}
                style={getSmStyle}
                onClick={() => setHamburger(!hamburger)}
              >
                {name}
              </NavLink>
            );
          })}
        </Flex>

        <Flex display={{ base: "flex", md: "none" }}>
          {hamburger ? (
            <RxCross1
              fontSize={"2rem"}
              onClick={() => setHamburger(!hamburger)}
            />
          ) : (
            <GiHamburgerMenu
              fontSize={"2rem"}
              onClick={() => setHamburger(!hamburger)}
            />
          )}
        </Flex>
        <Flex {...mdNavlink}>
          {smLinkList.map(({ redirect, name }) => {
            return (
              <NavLink style={getStyle} className="md-navlink" to={redirect}>
                {name}
              </NavLink>
            );
          })}
        </Flex>
      </Flex>
    </div>
  );
};
