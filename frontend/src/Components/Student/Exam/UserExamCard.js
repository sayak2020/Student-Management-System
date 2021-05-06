import React from "react";
import { Card, Button, CardHeader, CardText, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function UserExamCard(props) {
  return (
    <Row>
      <Col sm="4" className="profile-card">
        <Card body>
          <div className="text-center">
            <h3>Name: {props.name}</h3>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              Status : {props.status}
            </div>
          </div>
          <Link
            to={{
              pathname: `/user_test/${props.id}`,
            }}
          >
            <Button className="float-right" color="default" size="sm">
              Give Test
            </Button>
          </Link>
        </Card>
      </Col>
    </Row>
  );
}

export default UserExamCard;
