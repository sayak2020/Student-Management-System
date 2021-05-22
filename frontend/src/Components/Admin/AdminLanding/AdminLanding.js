import React from "react";
import AdminNav from "./AdminNav";
import { Jumbotron, Button } from "reactstrap";
import Exam from "../Exam/Exam";
import "./AdminLanding.css";

function AdminLanding() {
  return (
    <div>
      <AdminNav />
      <Jumbotron className="admin-landing">
        <h1 className="display-3 admin-text">Hello, Admin!</h1>
      </Jumbotron>
      <Exam />
    </div>
  );
}

export default AdminLanding;
