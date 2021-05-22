import React from "react";
import { Card, Button, CardHeader, CardText, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./StudentCard.css";

const StudentCard = (props) => {
  return (
    <Row className="row-all">
      <Col sm="4" className="profile-card">
        <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
          <div className="d-flex justify-content-between">
            <Link
              to={{
                pathname: `../../admin_attendance/${props.email}`,
              }}
            >
              <Button className="float-right" color="default" size="sm">
                View Attendance
              </Button>
            </Link>
            <Link
              to={{
                pathname: `../filter_result/${props.email}`,
              }}
            >
              <Button className="float-right" color="default" size="sm">
                View Result
              </Button>
            </Link>
            <Link
              to={{
                pathname: `../../approved_leave/${props.email}`,
              }}
            >
              <Button className="float-right" color="default" size="sm">
                Granted Leave
              </Button>
            </Link>
          </div>
        </CardHeader>
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
