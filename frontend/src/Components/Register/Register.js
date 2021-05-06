import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Register.css";

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
      name: "",
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
        name: this.state.name,
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
          <div className="registerpage">
            <Col className="registercontainer" lg="6" md="8">
              <Card className="bg-secondary-register shadow border-0-register">
                <CardHeader className="bg-transparent-register pb-5-register">
                  <div className="text-center-register text-muted-register mb-4-register">
                    <medium>Sign up with credentials</medium>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                  <Form role="form" onSubmit={this.handleSubmit}>
                    <FormGroup>
                      <InputGroup className="input-group-alternative-register mb-3-register">
                        <Input
                          placeholder="Name"
                          type="name"
                          value={this.state.name}
                          onChange={(event) =>
                            this.setState({
                              name: event.target.value,
                            })
                          }
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative-register mb-3-register">
                        <Input
                          placeholder="Email"
                          type="email"
                          value={this.state.username}
                          onChange={(event) =>
                            this.setState({
                              username: event.target.value,
                            })
                          }
                          required
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative-register">
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
                          required
                        />
                      </InputGroup>
                    </FormGroup>

                    <Button type="submit" value="Submit" color="primary">
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </div>
        </>
      );
    }
  }
}

export default Register;
