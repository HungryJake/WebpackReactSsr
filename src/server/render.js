import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from "../components/Routes";
import { Provider } from "react-redux";
import configureStore from "../store";
import { fetchArticle } from "../actions";

import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";

export default ({ clientStats }) => (req, res) => {
  const site = req.hostname.split(".")[0];
  const slug = req.url.split("/").reverse()[0];
  const context = { site };

  const store = configureStore();
  store.dispatch(fetchArticle(site, slug));

  const loadArticle = (site, slug) => {
    return store.dispatch(fetchArticle(site, slug));
  };

  const app = () =>
    renderToString(
      <Provider store={store}>
        <StaticRouter location={req.originalUrl} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>
    );

  const template = () => {
    const appOutput = app();
    const names = flushChunkNames().concat([`assets/styles/${site}-theme-css`]);
    const { js, styles, cssHash } = flushChunks(clientStats, {
      chunkNames: names
    });

    return `
      <html>
        <head>
          ${styles}
        </head>
        <body>
          <div id="app">${appOutput}</div>
          ${js}
          <script>
            window.INITIAL_STATE = ${JSON.stringify(store.getState())}
          </script>
          ${cssHash}
        </body>
      </html>
    `;
  };

  if (req.path.match(/^\/article\//)) {
    const promise = loadArticle(site, slug);
    promise.then(_ => {
      res.send(template());
    });
  } else {
    res.send(template());
  }
};
