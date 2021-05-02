import React from "react";
import { Jumbotron, Button } from "reactstrap";

function Exam(props) {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Exam Cell</h1>
      </Jumbotron>
      <Button href="/create_exam">Create exam</Button>
    </div>
  );
}

export default Exam;
