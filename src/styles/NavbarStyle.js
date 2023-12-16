export const navigation = {
  bg: "red.800",
  color: "white.500",
  justifyContent: "space-between",
  px: { base: "2", md: "4" },
  py: { base: "2", md: "4" },
  alignItems: "center",
  position: "relative",
  zIndex: "1",
};

export const smNavilink = {
  position: "absolute",
  top: "3.5rem",
  right: 0,
  h: "92vh",
  w: "55vw",
  fontSize: "1.8rem",
  bgColor: "white",
  color: "black",
  flexDir: { base: "column", md: "row" },
  alignItems: "center",
  py: "1rem",
  gap: "1.4rem",
  display: { base: "flex", md: "none" },
  zIndex: "300",
};

export const mdNavlink = {
  display: { base: "none", md: "flex" },
  fontSize: "1.2rem",
  w: { md: "60%", lg: "45%" },
  justifyContent: "space-between",
  alignItems: "center",
};

export const mdActiveLink = {
  backgroundColor: "rgb(255 129 129 / 67%)",
  color: "black",
  borderRadius: "14px",
  textDecoration: "underline",
};

export const smActiveLink = {
  backgroundColor: "black",
  color: "white",
  borderRadius: "20px",
  boxShadow: "1px 1px 10px blue",
  textDecoration: "underline",
};
