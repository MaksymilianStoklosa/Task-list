import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from 'routing/Routes';

const Routing = () => (
  <Switch>
    {Routes.map((route) => (
      <Route
        path={route.path}
        component={route.component}
        exact
        key={route.path}
      />
    ))}
  </Switch>
);

export default Routing;
