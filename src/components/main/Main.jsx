import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import NavbarStyle from './styles/navbar';
import Home from '../Home/Home';
import Quotes from '../Quotes/Quotes';
import Resume from '../Resume/Resume';
import About from '../About/About';
import NoMatch from '../NoMatch/NoMatch';

const activeLink = {
  borderBottom: '1px solid red'
};

export default function() {
  return (
    <Router>
      <nav className={NavbarStyle.NavBar}>
        <ul>
          <li className="nav-item">
            <NavLink activeStyle={activeLink} to="/" exact>
              My Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={activeLink} to="/quotes">
              What I said
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={activeLink} to="/resume">
              My Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeStyle={activeLink} to="/about">
              Who am I
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quotes">
          <Quotes />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
