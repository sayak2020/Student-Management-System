import React from "react";
import { Card, Row, Col } from "reactstrap";
import "./ResultCard.css";

function ResultCard(props) {
  return (
    <Row className="row-all result-row">
      <Col sm="4" className="profile-card">
        <Card body className="result-crd">
          <div className="text-center">
            <h3>Name : {props.name}</h3>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              Email : {props.studentemail}
            </div>

            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              Total Marks: {props.totalmarks}
            </div>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              Obtained Marks: {props.obtained}
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default ResultCard;
