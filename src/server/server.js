import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
const expressStaticGzip = require("express-static-gzip");
const express = require("express");
const server = express();
import webpack from "webpack";

import configDevClient from "../../config/webpack.dev-client.js";
import configDevServer from "../../config/webpack.dev-server.js";
import configProdClient from "../../config/webpack.prod-client.js";
import configProdServer from "../../config/webpack.prod-server.js";

const isProd = process.env.NODE_ENV === "production";
const isDev = !isProd;

if (isDev) {
  const compiler = webpack([configDevClient, configDevServer]);

  const clientCompiler = compiler.compilers[0];
  const serverCompiler = compiler.compilers[1];

  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    configDevClient.devServer
  );
  const webpackHotMiddlware = require("webpack-hot-middleware")(
    clientCompiler,
    configDevClient.devServer
  );
  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddlware);
  console.log("Middleware enabled");
} else {
  const render = require("./render.js");
  server.use(
    expressStaticGzip("dist", {
      enableBrotli: true
    })
  );
  server.use(render());
}

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
