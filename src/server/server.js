import React from "react";
import ReactDOMServer from "react-dom/server";

const express = require("express");
const server = express();

server.disable("x-powered-by");
server.use(express.static("dist"));

server.get("*", (req, res) => {
  const html = ReactDOMServer.renderToString(<div>Hello world SSR!!!</div>);
  res.send(html);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
