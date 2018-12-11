import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter/AppRouter";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Store/Store";
const rootElement = document.getElementById("root");
ReactDOM.render(<AppRouter />, rootElement);
