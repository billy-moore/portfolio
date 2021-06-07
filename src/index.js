import React from "react";
import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { hashHistory } from 'react-dom'

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import ProjectsPage from "views/ProjectsPage/ProjectsPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

//var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hashHistory}>
    <Switch>
      <Route path="/projects-page" component={ProjectsPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
