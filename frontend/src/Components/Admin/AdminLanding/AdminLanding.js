import React from "react";
import { Jumbotron, Button } from "reactstrap";

function AdminLanding() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, Admin!</h1>
      </Jumbotron>
      <Button href="/studentprofile" size="lg" outline color="secondary">
        View Student Profiles
      </Button>{" "}
      <br />
      <Button size="lg" outline color="secondary">
        View Attendance
      </Button>{" "}
      <br />
      <Button size="lg" outline color="secondary">
        View Leave Application
      </Button>{" "}
    </div>
  );
}

export default AdminLanding;
