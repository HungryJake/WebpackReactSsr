import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "../assets/styles/nav.css";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Routes />
      </Router>
    );
  }
}
