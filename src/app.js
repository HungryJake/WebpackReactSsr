/* eslint-disable */
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import AppRoot from "./components/AppRoot";

function render() {
  const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <AppContainer>
      <AppRoot />
    </AppContainer>,
    document.getElementById("app")
  );
}
render(AppRoot);

if (module.hot) {
  module.hot.accept("./components/AppRoot.js", () => {
    render(require("./components/AppRoot.js").default);
  });
}
