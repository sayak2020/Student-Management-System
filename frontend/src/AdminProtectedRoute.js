import React from "react";
import { Route, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

const AdminProtectedRoute = ({ component: Component, ...rest }) => {
  const cookies = new Cookies();
  const isAuthenticated = `${cookies.get("adminID")}`;

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
                pathname: "/admin_login",
              }}
            />
          );
        }
      }}
    />
  );
};

export default AdminProtectedRoute;
