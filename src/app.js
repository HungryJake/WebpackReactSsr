/* eslint-disable */
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import AppRoot from "./components/AppRoot";
import { Provider } from "react-redux";
import configureStore from "./store";
import { actionTest } from "./actions";

const store = configureStore(window.INITIAL_STATE);

function render() {
  ReactDOM.hydrate(
    <Provider store={store}>
      <AppContainer>
        <AppRoot />
      </AppContainer>
    </Provider>,
    document.getElementById("app")
  );
}

store.dispatch(actionTest("Hahah"));

render(AppRoot);

if (module.hot) {
  module.hot.accept("./components/AppRoot.js", () => {
    render(require("./components/AppRoot.js").default);
  });
}
