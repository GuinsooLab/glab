import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";

export default function App() {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/home" />} />
        <Route exact path="/app" render={() => <Redirect to="/app/home" />} />
        <PrivateRoute path="/app" component={Layout}/>
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );
}

function PrivateRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => React.createElement(component, props)}
    />
  );
}
