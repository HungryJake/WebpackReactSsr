import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Gallery from "./Gallery";
import About from "./About";
import Article from "./Article";

class Routes extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Link to="/">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/article">Article</Link>
        </div>
        <Route exact path="/" component={Gallery} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article} />
      </div>
    );
  }
}

export default Routes;
