import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/tailwind.css";
import Header from "./components/Header";
import routes from "./utils/routes";

let App = (props) => {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default App;
