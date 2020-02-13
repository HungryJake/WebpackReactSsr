import React from "react";
import { renderToString } from "react-dom/server";
import AppRoot from "../components/AppRoot";

export default () => (req, res) => {
  res.send(`
    <html>
      <head>
        <link href="/main.css" rel="stylesheet" />
      </head>
      <body>
        <div id="app">${renderToString(<AppRoot />)}</div>
        <script src='vendor-bundle.js'></script>
        <script src='main-bundle.js'></script>
      </body>
    </html>
  `);
};
