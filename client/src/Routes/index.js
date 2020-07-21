import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

class ClientRoute extends Component {
  render() {
    return (
      <Switch>
        {routes.map((route, k) => (
          <Route key={`route_${k}`} {...route} />
        ))}
      </Switch>
    );
  }
}

export default ClientRoute;
