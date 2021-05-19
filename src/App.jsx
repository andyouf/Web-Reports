import React, { useState } from "react";
import * as auth from "./auth-provider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss";
import AuthenticatedApp from "./authenticated-app";
import UnauthenticatedApp from "./unauthenticated-app";

const App = () => {
  const [authenticated, setAuthenticated] = useState(() => {
    const authToken = auth.getToken();
    if (authToken === process.env.REACT_APP_AUTH_TOKEN) {
      return true;
    } else {
      return false;
    }
  });

  const login = ({ username, password }) => {
    setAuthenticated(
      auth.login({
        username,
        password,
      })
    );
  };

  return authenticated ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp login={login} />
  );
};

export default App;
