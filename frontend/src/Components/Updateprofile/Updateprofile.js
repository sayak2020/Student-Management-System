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
    user: [],
    useraddress: [],
    userclass: [],
  };

  componentDidMount() {
    const cookies = new Cookies();

    axios
      .get(`http://localhost:9000/student_profile/${cookies.get("userid")}`)
      .then((response) => {
        // if (response.data.student.name == null) {
        //   response.data.student.name = " ";
        // }
        console.log(response.data);
        this.setState({ user: response.data.student });
        this.setState({ useraddress: response.data.student.address });
        this.setState({ userclass: response.data.student.class });
      });
  }

  postDataHandler = () => {
    if(!this.state.name)
    {
      this.state.name= this.state.user.name
    }
    if(!this.state.phone)
    {
      this.state.phone= this.state.user.phone
    }
    if(!this.state.stream)
    {
      this.state.stream= this.state.userclass.stream
    }
    if(!this.state.section)
    {
      this.state.section= this.state.userclass.section
    }
    if(!this.state.year)
    {
      this.state.year= this.state.userclass.year
    }
    if(!this.state.street)
    {
      this.state.street= this.state.useraddress.street
    }
    if(!this.state.city)
    {
      this.state.city= this.state.useraddress.city
    }
    if(!this.state.pin)
    {
      this.state.pin= this.state.useraddress.pin
    }
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
                </Row>
              </CardHeader>
              <CardBody>
                {this.state.message && (
                  <p className="message"> {this.state.message} </p>
                )}
                <Form onSubmit={this.postDataHandler}>
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
                            defaultValue ={this.state.user.name}
                            onChange={(event) =>
                              this.setState({ name: event.target.value })
                            }
                            required
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
                            defaultValue ={this.state.user.phone}
                            onChange={(event) =>
                              this.setState({ phone: event.target.value })
                            }
                            required
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
                            defaultValue ={this.state.userclass.stream}
                            onChange={(event) =>
                              this.setState({ stream: event.target.value })
                            }
                            required
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
                            defaultValue ={this.state.userclass.section}
                            onChange={(event) =>
                              this.setState({ section: event.target.value })
                            }
                            required
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
                            defaultValue ={this.state.userclass.year}
                            onChange={(event) =>
                              this.setState({ year: event.target.value })
                            }
                            required
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
                            defaultValue ={this.state.useraddress.city}
                            onChange={(event) =>
                              this.setState({ city: event.target.value })
                            }
                            required
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
                            defaultValue ={this.state.useraddress.street}
                            onChange={(event) =>
                              this.setState({ street: event.target.value })
                            }
                            required
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
                            defaultValue ={this.state.useraddress.pin}
                            onChange={(event) =>
                              this.setState({ pin: event.target.value })
                            }
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <hr className="my-4" />
                    <Col className="text-right-update" xs="4">
                      <Button type="submit" value="Submit" color="primary">
                        Save
                      </Button>
                    </Col>
                  </div>
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
