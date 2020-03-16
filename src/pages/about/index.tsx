import React from "react";
import AboutUs from "./aboutUs";
import Contacts from "./contacts";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export default function About() {
  let match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${match.path}/aboutUs`}>
          <AboutUs />
        </Route>
        <Route path={`${match.path}/contacts`}>
          <Contacts />
        </Route>
      </Switch>
    </div>
  );
}
