import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
//import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";
//import { hashHistory } from 'react-router-dom'

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";

import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

const ProjectsPage = lazy(() => import('views/ProjectsPage/ProjectsPage.js') )
const ProfilePage = lazy(() => import('views/ProfilePage/ProfilePage.js') )
const LoginPage = lazy(() => import('views/LoginPage/LoginPage.js') )

//var hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter>
    <Suspense fallback={
      <div style={{display: 'Grid', justifyContent: 'center', alignContent: 'center', }}>
        <LoadingSpinner />
      </div>
    }>
      <Switch>
          <Route path="/projects-page" component={ProjectsPage} />
          <Route path="/profile-page" component={ProfilePage} />
          <Route path="/login-page" component={LoginPage} />
          <Route path="/" component={Components} />
      </Switch>
      </Suspense>
  </HashRouter>,
  document.getElementById("root")
);
