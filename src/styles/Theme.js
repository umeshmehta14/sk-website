import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  red: {
    600: "#fd5c63",
    800: "#E32636",
  },
  white: {
    900: "#fafafa",
    500: "#ffffff",
  },
};

const fonts = {
  heading: "Lora, serif",
  body: "'Lora', serif",
};

const styles = {
  global: (props) => ({
    "html, body": {
      bg: "white.500",
      color: "black.900",
    },
    "*::placeholder": {
      color: "gray.600",
    },
  }),
};

export const components = {
  Button: {
    baseStyle: {
      p: "0.3rem",
      minW: 5,
      fontSize: "xs",
      borderRadius: "none",
      bg: "transparent",
      color: "blue.900",
      _focus: {
        boxShadow: "transparent",
      },
    },
    variants: {
      "link-button": {
        bg: "transparent",
        color: "blue.900",
        fontSize: "xs",
        minW: 5,
        h: "1.5rem",
      },
    },
    outline: {
      background: "none",
    },
    link: {
      background: "transparent",
      _hover: {
        background: "transparent",
        textDecoration: "none",
      },
    },
  },
  Tabs: {
    parts: ["tab"],
    baseStyle: {
      tab: {
        _selected: {
          borderBottom: "none",
          borderTop: "2px solid white",
        },
        _focus: {
          color: "#63b3ed",
        },
      },
    },
  },
};

const theme = extendTheme({ config, colors, fonts, styles, components });

export default theme;
