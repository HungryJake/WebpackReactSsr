const express = require("express");
const server = express();

server.disable("x-powered-by");
// server.use(express.static("dist"));

const expressStaticGzip = require("express-static-gzip");
server.use(expressStaticGzip("dist", {
  orderPreference: ['br', 'gz'],
  enableBrotli: true,
  setHeaders: function (res, path) {
    res.setHeader("Cache-Control", "public, max-age=31536000");
  }
}));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
