import React from "react";
import { renderToString } from "react-dom/server";
import AppRoot from "../components/AppRoot";

export default () => (req, res) => {
  console.log("sending render string.");
  res.send(`
    <html>
      <head>
        <link href="/main.css" rel="stylesheet" />
      </head>
      <body>
      <h1>hi SSR</h1>
        <div id="react-root">
          ${renderToString(<AppRoot />)}
        </div>
        <script src='vendor-bundle.js'></script>
        <script src='main-bundle.js'></script>
      </body>
    </html>
  `);
};
