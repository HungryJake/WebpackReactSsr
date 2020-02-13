/* eslint-disable */
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import AppRoot from "./components/AppRoot";

function render() {
  ReactDOM.hydrate(
    <AppContainer>
      <AppRoot />
    </AppContainer>,
    document.getElementById("app")
  );
}
render(AppRoot);

if (module.hot) {
  module.hot.accept("./components/AppRoot/index.js", () => {
    render(require("./components/AppRoot/index.js").default);
  });
}
