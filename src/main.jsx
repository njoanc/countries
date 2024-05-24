import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ThemeProvider from "./context/ThemeContext.jsx";
import CountryProvider from "./context/CountryContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <CountryProvider>
      <App />
    </CountryProvider>
  </ThemeProvider>
);
