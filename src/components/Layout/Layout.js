import React from "react";
import {
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";

// pages
import Home from "../../pages/home";
import About from "../../pages/about";

import { UserRoleContext } from "../../context/UserContext";

function Layout() {
  const classes = useStyles();
  const userRole = !!localStorage.getItem("H_USER_ROLE") ? localStorage.getItem("H_USER_ROLE") : 1;
  const [role, setRole] = React.useState(userRole);

  const handleSetRole = (value) => {
    setRole(value);
    localStorage.setItem("H_USER_ROLE", value);
    window.open("#/", "_self");
  };

  return (
    <div className={classes.root}>
      <UserRoleContext.Provider value={role}>
        <Header ctx={{role, handleSetRole}}/>
        <Switch>
          <Route path="/app/home" component={Home} />
          <Route path="/app/about" component={About} />
          {/*<Route path="/app/:name" component={Subsystem} />*/}
        </Switch>
      </UserRoleContext.Provider>
    </div>
  );
}

export default withRouter(Layout);
