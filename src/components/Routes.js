import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import universal from "react-universal-component";

const UniversalComponent = universal(props => import(`./${props.page}`));

class Routes extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Link to="/">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/article">Article</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <UniversalComponent page="Gallery" />
          </Route>
          <Route exact path="/about">
            <UniversalComponent page="About" />
          </Route>
          <Route exact path="/article">
            <UniversalComponent page="Article" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Routes;
