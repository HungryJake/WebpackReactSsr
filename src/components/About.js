import React from "react";
import MarkdownData from "../data/post.md";
import imagePath from "../assets/images/link.jpg";
import "../assets/styles/About.css";

export default function() {
  return (
    <div className="profile">
      <img src={imagePath} />
      <h3>{MarkdownData.title}</h3>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
      />
    </div>
  );
}
