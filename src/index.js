import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/Game";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  rootElement
);
