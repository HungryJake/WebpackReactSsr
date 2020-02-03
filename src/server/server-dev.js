const express = require("express");
const server = express();
const helmet = require("helmet");
const db = require("./database");
const environment = process.env.NODE_ENV || "development";

// production env
if (environment === "production") {
  const expressStaticGzip = require("express-static-gzip");
  server.use(
    expressStaticGzip("dist", {
      orderPreference: ["br", "gz"],
      enableBrotli: true,
      setHeaders: function(res, path) {
        res.setHeader("Cache-Control", "public, max-age=31536000");
      }
    })
  );
}

// development env
if (environment === "development") {
  const webpack = require("webpack");
  const config = require("../../config/webpack.dev");
  const compiler = webpack(config);
  const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
  );
  const webpackHotMiddlware = require("webpack-hot-middleware")(
    compiler,
    config.devServer
  );
  const staticMiddleware = express.static("dist");
  server.use(webpackDevMiddleware);
  server.use(webpackHotMiddlware);
  server.use(staticMiddleware);
}

server.use(helmet());
server.use(express.json());

const PORT = process.env.PORT || 3030;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
