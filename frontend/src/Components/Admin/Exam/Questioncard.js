import React from "react";
import { Card, Row, Col } from "reactstrap";
import "./Questioncard.css";

function Questioncard(props) {
  return (
    <Row className="row-all">
      <Col sm="4" className="profile-card">
        <Card body className="question-card">
          <div className="text-left">
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
            <div className="h5 mt-4 D-margin">
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
