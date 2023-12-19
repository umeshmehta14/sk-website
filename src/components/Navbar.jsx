import { Flex, Image, Heading } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

import { GiHamburgerMenu, RxCross1 } from "../assets/Icons";
import SK_LOGO from "../assets/images/SK_LOGO.png";
import {
  mdActiveLink,
  mdNavlink,
  navigation,
  smActiveLink,
  smNavilink,
} from "../styles/NavbarStyle";
import { useData } from "../contexts/DataContext";

const Navbar = () => {
  const { hamburger, setHamburger } = useData();
  const navigate = useNavigate();

  const getStyle = ({ isActive }) => {
    return isActive ? mdActiveLink : {};
  };

  const getSmStyle = ({ isActive }) => {
    return isActive ? smActiveLink : {};
  };
  return (
    <div className="navbar">
      <Flex {...navigation}>
        <Flex
          onClick={() => {
            navigate("/");
            setHamburger(false);
          }}
          alignItems={"center"}
          gap={"0.5rem"}
          cursor={"pointer"}
          fontWeight={"bolder"}
          p={{ base: "0.2rem 0rem", md: "0.2rem 1rem" }}
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
          <NavLink
            to="/"
            className={hamburger ? "sm-navlink" : "none-sm-navlink"}
            style={getSmStyle}
            onClick={() => setHamburger(!hamburger)}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutUs"
            className={hamburger ? "sm-navlink" : "none-sm-navlink"}
            style={getSmStyle}
            onClick={() => setHamburger(!hamburger)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/courses"
            className={hamburger ? "sm-navlink" : "none-sm-navlink"}
            style={getSmStyle}
            onClick={() => setHamburger(!hamburger)}
          >
            Courses
          </NavLink>
          <NavLink
            to="/faq"
            className={hamburger ? "sm-navlink" : "none-sm-navlink"}
            style={getSmStyle}
            onClick={() => setHamburger(!hamburger)}
          >
            Faq
          </NavLink>
          <NavLink
            to="/contactUs"
            className={hamburger ? "sm-navlink" : "none-sm-navlink"}
            style={getSmStyle}
            onClick={() => setHamburger(!hamburger)}
          >
            Contact Us
          </NavLink>
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
          <NavLink style={getStyle} className="md-navlink" to="/">
            Home
          </NavLink>
          <NavLink style={getStyle} className="md-navlink" to="/aboutUs">
            About Us
          </NavLink>
          <NavLink style={getStyle} className="md-navlink" to="/courses">
            Courses
          </NavLink>
          <NavLink style={getStyle} className="md-navlink" to="/faq">
            Faq
          </NavLink>
          <NavLink style={getStyle} className="md-navlink" to="/contactUs">
            Contact Us
          </NavLink>
        </Flex>
      </Flex>
    </div>
  );
};

export default Navbar;
