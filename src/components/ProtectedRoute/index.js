import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const ok = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      component={(props) =>
        ok ? <Component {...props} /> : <Redirect to={`/login`} />
      }
    />
  );
};

export default ProtectedRoute;
