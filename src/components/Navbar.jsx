import { Flex, Heading } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

import { GiHamburgerMenu, RxCross1 } from "../assets/Icons";
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
        <Heading
          onClick={() => {
            navigate("/");
            setHamburger(false);
          }}
          cursor={"pointer"}
        >
          SK Computer
        </Heading>
        {hamburger && (
          <Flex {...smNavilink}>
            <NavLink
              to="/"
              className="sm-navlink"
              style={getSmStyle}
              onClick={() => setHamburger(!hamburger)}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutUs"
              className="sm-navlink"
              style={getSmStyle}
              onClick={() => setHamburger(!hamburger)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/courses"
              className="sm-navlink"
              style={getSmStyle}
              onClick={() => setHamburger(!hamburger)}
            >
              Courses
            </NavLink>
            <NavLink
              to="/faq"
              className="sm-navlink"
              style={getSmStyle}
              onClick={() => setHamburger(!hamburger)}
            >
              Faq
            </NavLink>
            <NavLink
              to="/contactUs"
              className="sm-navlink"
              style={getSmStyle}
              onClick={() => setHamburger(!hamburger)}
            >
              Contact Us
            </NavLink>
          </Flex>
        )}
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
