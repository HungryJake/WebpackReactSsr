import React from "react";
import "../assets/styles/Article.css";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import { fetchArticle } from "../actions";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    props.dispatch(fetchArticle(props.site, props.match.params.slug));
    return state;
  }

  render() {
    const billboardStyle = {
      backgroundImage: `url(${this.props.posterImage})`
    };
    import(`../assets/styles/${this.props.site}/theme.css`);
    try {
      return (
        <div>
          <div className="Article">
            <div className="billboard" style={billboardStyle} />
            <h1>{this.props.title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: this.props.__content }}
            />
          </div>
        </div>
      );
    } catch (err) {
      return <NotFound />;
    }
  }
}

export default connect(state => ({
  ...state.content
}))(Article);
