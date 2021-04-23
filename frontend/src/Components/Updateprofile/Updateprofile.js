/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import axios from "axios";
import "./UpdateProfile.css";
import Login from "../Login/Login";
import Cookies from "universal-cookie";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
//import UserHeader from "../Headers/UserHeader";

class Profile extends Component {
  state = {
    name: "",
    phone: "",
    stream: "",
    section: "",
    year: "",
    street: "",
    city: "",
    pin: "",
    message: "",
  };

  postDataHandler = () => {
    const patch = {
      name: this.state.name,
      phone: this.state.phone,
      stream: this.state.stream,
      section: this.state.section,
      year: this.state.year,
      street: this.state.street,
      city: this.state.city,
      pin: this.state.pin,
    };

    this.setState({ message: "Updated Successfully" });

    const cookies = new Cookies();

    axios.patch(
      `http://localhost:9000/student_profile/update/${cookies.get(
        "userid"
      )}/${cookies.get("username")}`,
      patch
    );
  };
  render() {
    return (
      <>
        {/* Page content */}
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
                  <Col className="text-right-update" xs="4">
                    <Button
                      color="primary"
                      onClick={this.postDataHandler}
                      size="sm"
                    >
                      Save
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                {this.state.message && (
                  <p className="message"> {this.state.message} </p>
                )}
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-username"
                            type="text"
                            value={this.state.name}
                            onChange={(event) =>
                              this.setState({ name: event.target.value })
                            }
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label">
                            Phone Number
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-number"
                            type="number"
                            value={this.state.phone}
                            onChange={(event) =>
                              this.setState({ phone: event.target.value })
                            }
                          />
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
                          <Input
                            className="form-control-alternative"
                            id="input-stream"
                            type="text"
                            value={this.state.stream}
                            onChange={(event) =>
                              this.setState({ stream: event.target.value })
                            }
                          />
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
                          <Input
                            className="form-control-alternative"
                            id="input-section"
                            type="text"
                            value={this.state.section}
                            onChange={(event) =>
                              this.setState({ section: event.target.value })
                            }
                          />
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
                          <Input
                            className="form-control-alternative"
                            id="input-year"
                            type="year"
                            value={this.state.year}
                            onChange={(event) =>
                              this.setState({ year: event.target.value })
                            }
                          />
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
                          <Input
                            className="form-control-alternative"
                            id="input-city"
                            type="text"
                            //default= null
                            value={this.state.city}
                            onChange={(event) =>
                              this.setState({ city: event.target.value })
                            }
                          />
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
                          <Input
                            className="form-control-alternative"
                            id="input-street"
                            type="text"
                            value={this.state.street}
                            onChange={(event) =>
                              this.setState({ street: event.target.value })
                            }
                          />
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
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            type="number"
                            value={this.state.pin}
                            onChange={(event) =>
                              this.setState({ pin: event.target.value })
                            }
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Container>
      </>
    );
  }
}

export default Profile;
