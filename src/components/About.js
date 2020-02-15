import React from "react";
import "../assets/styles/About.css";

export default props => {
  const siteConfig = require(`../data/${props.site}/siteConfig.js`);
  const imagePath = require(`../assets/images/${siteConfig.aboutImage}`);
  const MarkdownData = require(`../data/${props.site}/bio.md`);
  import(`../assets/styles/${props.site}/theme.css`);

  return (
    <div>
      <div className="About">
        <img src={imagePath} />
        <h1>{MarkdownData.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
        />
      </div>
    </div>
  );
};
