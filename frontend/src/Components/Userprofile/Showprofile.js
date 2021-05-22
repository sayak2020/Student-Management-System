import React from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  FormGroup,
  Form,
  Row,
  Col,
} from "reactstrap";
import "./Userprofile.css";

const Showprofile = (props) => (
  <div>
    <Container className="mt--7 header-update">
      <Col className="order-update">
        <Card className="bg-update shadow">
          <CardHeader className="bg-white-update border-0">
            <Row className="align-items-center-update">
              <Col xl="8">
                <h6 className="heading-small-update text-muted-update mb-4">
                  User information
                </h6>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
            <Form>
              <div className="pl-lg-4">
                <Row>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-stream"
                      >
                        Username
                      </label>
                      : {props.name}
                    </FormGroup>
                  </Col>
                  <Col lg="6">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-stream"
                      >
                        Phone Number
                      </label>
                      : {props.phone}
                    </FormGroup>
                  </Col>
                </Row>
              </div>
              <hr className="my-4" />
              {/* Address */}

              <div className="pl-lg-4">
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-stream"
                      >
                        Stream
                      </label>
                      : {props.stream}
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-section"
                      >
                        Section
                      </label>
                      : {props.section}
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-year"
                      >
                        Year
                      </label>
                      : {props.year}
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-city"
                      >
                        City
                      </label>
                      : {props.city}
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Street
                      </label>
                      : {props.street}
                    </FormGroup>
                  </Col>
                  <Col lg="4">
                    <FormGroup>
                      <label
                        className="form-control-label"
                        htmlFor="input-country"
                      >
                        Pin code
                      </label>
                      : {props.pin}
                    </FormGroup>
                  </Col>
                </Row>

                <hr className="my-4" />
              </div>
              <Button href="/updateprofile">Edit</Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Container>
  </div>
);

export default Showprofile;
