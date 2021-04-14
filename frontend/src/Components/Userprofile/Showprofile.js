import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

const Showprofile = (props) => (
  <div>
    <Col className="order-xl-2 mb-5 mb-xl-0 userprofile" xl="4">
      <Card className="card-profile shadow">
        <Row className="justify-content-center">
          <Col className="order-lg-2" lg="3"></Col>
        </Row>
        <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
          <div className="d-flex justify-content-between">
            <Button
              className="float-right"
              color="default"
              href="/updateprofile"
              size="sm"
            >
              Edit profile
            </Button>
          </div>
        </CardHeader>
        <CardBody className="pt-0 pt-md-4">
          <div className="text-center">
            <h3>{props.name}</h3>
            <div className="h5 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              {props.phone}
            </div>
            <div className="h5 font-weight-300">
              <i className="ni location_pin mr-2" />
              {props.street}, {props.city}
            </div>

            <div>
              <i className="ni education_hat mr-2" />
              {props.stream},{props.year}
              {props.section}
            </div>

            <p>{props.pin}</p>
          </div>
        </CardBody>
      </Card>
    </Col>
  </div>
);

export default Showprofile;
