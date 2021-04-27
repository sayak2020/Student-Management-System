import React from "react";
import AdminNav from "./AdminNav";
import { Jumbotron, Button } from "reactstrap";

function AdminLanding() {
  return (
    <div>
      <AdminNav />
      <Jumbotron>
        <h1 className="display-3">Hello, Admin!</h1>
      </Jumbotron>
    </div>
  );
}

export default AdminLanding;
