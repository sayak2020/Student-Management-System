import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("sign-up handleSubmit, username: ");
    console.log(this.state.username);
    event.preventDefault();

    //request to server to add a new username/password
    axios
      .post("http://localhost:9000/login/register", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          this.setState({
            //redirect to login page
            redirectTo: "/login",
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error.response);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <>
          <main ref="main">
            <section className="section section-shaped section-lg">
              <div className="shape shape-style-1 bg-gradient-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="pt-lg-7">
                <Row className="justify-content-center">
                  <Col lg="5">
                    <Card className="bg-secondary shadow border-0">
                      <CardHeader className="bg-white pb-5">
                        <div className="text-muted text-center mb-3">
                          <small>Sign up with</small>
                        </div>
                      </CardHeader>
                      <CardBody className="px-lg-5 py-lg-5">
                        <div className="text-center text-muted mb-4">
                          <small>Or sign up with credentials</small>
                        </div>
                        <Form role="form">
                          <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-email-83" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email"
                                type="email"
                                value={this.state.username}
                                onChange={(event) =>
                                  this.setState({
                                    username: event.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-lock-circle-open" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Password"
                                type="password"
                                autoComplete="off"
                                value={this.state.password}
                                onChange={(event) =>
                                  this.setState({
                                    password: event.target.value,
                                  })
                                }
                              />
                            </InputGroup>
                          </FormGroup>

                          <Row className="my-4">
                            <Col xs="12"></Col>
                          </Row>
                          <div className="text-center">
                            <Button
                              className="mt-4"
                              color="primary"
                              type="button"
                              onClick={this.handleSubmit}
                            >
                              Create account
                            </Button>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          </main>
        </>
      );
    }
  }
}

export default Register;
