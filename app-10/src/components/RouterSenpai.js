import React from "react";
import { Switch, Route } from "react-router";
import Products from "./Products";
import Details from "./Details";

const RouterSenpai = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </div>
  );
};

export default RouterSenpai;
