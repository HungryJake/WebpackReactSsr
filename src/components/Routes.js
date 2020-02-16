import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import universal from "react-universal-component";
import NotFound from "./NotFound";

const UniversalComponent = universal(props => import(`./${props.page}`));

class Routes extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Link to="/">Gallery</Link>
          <Link to="/about">About</Link>
          <Link to="/article/post">Article 1</Link>
          <Link to="/article/post2">Article 2</Link>
          <Link to="/draft/post">Draft 1</Link>
          <Link to="/draft/post2">Draft 2</Link>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={({ staticContext }) => {
              const site = staticContext
                ? staticContext.site
                : location.hostname.split(".")[0];
              return <UniversalComponent page="Gallery" site={site} />;
            }}
          />
          <Route
            exact
            path="/about"
            render={({ staticContext, match }) => {
              const site = staticContext
                ? staticContext.site
                : location.hostname.split(".")[0];
              return (
                <UniversalComponent page="About" site={site} match={match} />
              );
            }}
          />
          <Route
            exact
            path="/article/:slug"
            render={({ staticContext, match }) => {
              const site = staticContext
                ? staticContext.site
                : location.hostname.split(".")[0];
              return (
                <UniversalComponent page="Article" site={site} match={match} />
              );
            }}
          />
          <Route
            exact
            path="/draft/:slug"
            render={({ staticContext, match }) => {
              const site = staticContext
                ? staticContext.site
                : location.hostname.split(".")[0];
              return (
                <UniversalComponent
                  page="DraftArticle"
                  site={site}
                  match={match}
                />
              );
            }}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
