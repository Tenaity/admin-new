import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import theme from "./theme";
import { ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
