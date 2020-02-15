import React from "react";
import MarkdownData from "../../data/post.md";
import imagePath from "../../assets/images/link.jpg";

export default function() {
  return (
    <div className="profile">
      <img src={imagePath} />
      <h1>{MarkdownData.title}</h1>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
      />
    </div>
  );
}
