import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from "../components/Routes";

import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";

export default ({ clientStats }) => (req, res) => {
  const site = req.hostname.split(".")[0];
  const context = { site };
  const app = renderToString(
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>
  );
  const chunkNames = flushChunkNames().concat([
    `assets/styles/${site}-theme-css`
  ]);
  const { js, styles, cssHash } = flushChunks(clientStats, {
    chunkNames
  });
  res.send(`
    <html>
      <head>
        ${styles}
      </head>
      <body>
        <div id="app">${app}</div>
        ${cssHash}
        ${js}
      </body>
    </html>
  `);
};
