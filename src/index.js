import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import theme from "./styles/Theme";
import { DataProvider, DataContext } from "./contexts/DataContext";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <DataProvider>
        <Router>
          <App />
        </Router>
      </DataProvider>
    </ChakraProvider>
  </React.StrictMode>
);

export { DataContext };
