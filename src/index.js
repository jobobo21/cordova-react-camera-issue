import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const appInit = () => {
  ReactDOM.render(React.createElement(App), document.getElementById("root"));
};

if (window.cordova) document.addEventListener("deviceready", appInit);
else appInit();
