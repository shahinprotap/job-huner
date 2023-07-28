import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Container } from "@mui/material";
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Container>
  </React.StrictMode>
);
