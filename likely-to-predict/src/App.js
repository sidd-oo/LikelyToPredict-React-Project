import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/css/tailwind.css";
import Header from "./components/Header";
import routes from "./utils/routes";
  import firebase from "./config/firebase";

let App = (props) => {

  const AppContext = React.createContext({loggedIn: false, user:{}});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        console.log(user);
      }else{
        setUser({});
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <>
      <Router>
        <AppContext.Provider value = {[isLoggedIn, user]}>
          <Header/>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key = {index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </AppContext.Provider>
      </Router>
    </>
  );
};

export default App;
