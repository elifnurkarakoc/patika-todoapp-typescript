import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./my-theme";
import { PopUpProvider } from "./contexts/PopUpContext";
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <PopUpProvider>
        <App />
      </PopUpProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
