import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeComponent from "../src/views/Home";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomeComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
