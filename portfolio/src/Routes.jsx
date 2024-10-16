import React from "react";
import { Route, Switch, Router, Redirect } from "wouter";
import Home from "./Pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
