import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>File Upload And Download</h1>
      <nav>
        <NavLink activeClassName="active" to="/notes" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/fileslist">
          Files List
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
