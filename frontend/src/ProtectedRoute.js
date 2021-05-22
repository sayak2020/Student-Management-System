import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const cookies = new Cookies();
  const isAuthenticated = `${cookies.get("userid")}`;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated.localeCompare(undefined)) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
