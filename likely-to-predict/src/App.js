import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/tailwind.css";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Login from "./pages/Login";

let App = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact = {true}>
            <Home />
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/gallery">
            <Gallery/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
