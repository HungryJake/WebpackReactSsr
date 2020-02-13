import React from "react";
import MarkdownData from "../../data/post.md";
import imagePath from "../../assets/images/link.jpg";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="profile">
        <div className="content" />
        <img src={imagePath} />
        <h1>{MarkdownData.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
        />
        <h1> I love you, God.!</h1>
      </div>
    );
  }
}
