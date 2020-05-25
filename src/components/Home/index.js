import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Init, List } from "./Pages";

function Home() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="index">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  Lista
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="index">
                  Sair
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <Init />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;
