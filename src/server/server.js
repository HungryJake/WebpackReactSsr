import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import AppRoot from "../components/AppRoot";

const express = require("express");
const server = express();

// TODO use helmet
server.disable("x-powered-by");

const isProd = process.env.NODE_ENV === "production";
if (!isProd) {
  const webpack = require("webpack");
  const config = require("../../config/webpack.dev.js");
  const compiler = webpack(config);
  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  );
  const webpackHotMiddlware = require("webpack-hot-middleware")(
    compiler,
    config.devServer
  );
  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddlware);
  console.log("Middleware enabled");
  server.use(express.static(path.resolve(__dirname, "dist")));
}

server.use(express.static("dist"));
const expressStaticGzip = require("express-static-gzip");
server.use(
  expressStaticGzip("dist", {
    enableBrotli: true
  })
);
server.get("*", (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <div id="react-root">
          ${ReactDOMServer.renderToString(<AppRoot />)}
        </div>
      </body>
    </html>
  `);
});

server.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString();
  res.send(html);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
