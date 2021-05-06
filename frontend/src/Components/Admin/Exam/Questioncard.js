import React from "react";
import { Card, Button, CardHeader, CardText, Row, Col } from "reactstrap";

function Questioncard(props) {
  return (
    <Row>
      <Col sm="4" className="profile-card">
        <Card body>
          <div className="text-center">
            <h3>Question: {props.questions}</h3>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              A: {props.optionA}
            </div>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              B: {props.optionB}
            </div>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              C: {props.optionC}
            </div>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              D: {props.optionD}
            </div>

            <div className="h5 font-weight-300">
              <i className="ni location_pin mr-2" />
              Answer: {props.answer}, Marks: {props.marks}
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default Questioncard;
