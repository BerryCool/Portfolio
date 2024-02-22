import React from "react";
import { Route, Switch, Router, Redirect } from "wouter";
import Home from "./Pages/Home";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/:">
            <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
