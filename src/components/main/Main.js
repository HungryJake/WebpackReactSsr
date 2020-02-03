import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from "../Home/Home";
import NoMatch from "../NoMatch/NoMatch";

const activeLink = {
  borderBottom: "1px solid red"
};

export default function() {
  return (
    <Router>
      <nav>
        <ul>
          <li className="nav-item">
            <NavLink activeStyle={activeLink} to="/" exact>
              My Home
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
