import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import TrafficLight from "./App";

ReactDOM.render(
  <Router>
    <TrafficLight />
  </Router>,
  document.getElementById("root")
);
