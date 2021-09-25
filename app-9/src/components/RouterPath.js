import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";
import Signup from "./Signup";

const RouterPath = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </div>
  );
};

export default RouterPath;
