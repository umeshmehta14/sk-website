export const navigation = {
  bg: "linear-gradient(90deg, rgba(255,227,246,1) 0%, rgba(227,38,54,1) 65%);",
  color: "white.500",
  justifyContent: "space-between",
  px: { base: "2", md: "4" },
  py: { base: "1", md: "0" },
  alignItems: "center",
  position: "relative",
};

export const smNavilink = {
  position: "absolute",
  top: "3.9rem",
  right: 0,
  h: "92vh",
  fontSize: "1.8rem",
  bgColor: "white",
  color: "black",
  flexDir: { base: "column", md: "row" },
  alignItems: "center",
  py: "1rem",
  gap: "0.3rem",
  display: { base: "flex", md: "none" },
  zIndex: "300",
  boxShadow: "-5px 0px 20px #808080ad",
};

export const mdNavlink = {
  display: { base: "none", md: "flex" },
  fontSize: "1.2rem",
  w: { md: "60%", lg: "45%" },
  justifyContent: "space-between",
  alignItems: "center",
};

export const mdActiveLink = {
  color: "yellow",
  borderBottom: "3px solid white",
};

export const smActiveLink = {
  color: "red",
  borderBottom: "2px solid red",
};
