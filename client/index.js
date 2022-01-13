import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import styles from '../public/styles.css';

ReactDOM.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);