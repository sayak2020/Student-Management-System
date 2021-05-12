import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    var cookieArr = document.cookie.split(";");
    var cookiePair = cookieArr[0].split("=");
    const isAuthenticated = decodeURIComponent(cookiePair[1]);
    console.log(isAuthenticated);

    return isAuthenticated.localeCompare(undefined) ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  }
}

export default ProtectedRoute;
