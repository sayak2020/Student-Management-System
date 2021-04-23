import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const StudentCard = (props) => {
  return (
    <Row>
      <Col sm="4">
        <Card body>
          <div className="text-center">
            <h3>Name: {props.name}</h3>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              Phone number: {props.phone}
            </div>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              Email: {props.email}
            </div>
            <div className="h5 font-weight-300">
              <i className="ni location_pin mr-2" />
              Street: {props.street}, City: {props.city}
            </div>

            <div>
              <i className="ni education_hat mr-2" />
              Stream: {props.stream},Year: {props.year}
              Section: {props.section}
            </div>

            <p>Pin: {props.pin}</p>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default StudentCard;
