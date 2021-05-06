import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./AdminLogin.css";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Col,
} from "reactstrap";

class AdminLogin extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
      redirectTo: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("http://localhost:9000/admin_login/a/a_login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        console.log("adminlogin response: ");
        console.log(response);
        console.log(response.data);

        if (response.status === 200) {
          this.setState({
            redirectTo: "/adminlanding",
          });
        }
      })
      .catch((err) => {
        this.setState({ errorMessage: "Username or password is incorrect" });
      });
  }
  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <>
          <div className="adminloginpage">
            <Col className="adminlogincontainer" lg="5" md="7">
              <Card className="bg-secondary-adminlogin shadow border-0-adminlogin">
                {this.state.errorMessage && (
                  <p className="error"> {this.state.errorMessage} </p>
                )}
                <CardBody className="px-lg-5-adminlogin py-lg-5">
                  <div className="text-center-adminlogin text-muted-adminlogin mb-4-adminlogin">
                    <small>Sign in with credentials</small>
                  </div>

                  <Form role="form" onSubmit={this.handleSubmit}>
                    <FormGroup className="mb-3-adminlogin">
                      <InputGroup className="input-group-alternative-adminlogin">
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
                      <InputGroup className="input-group-alternative-adminlogin">
                        <Input
                          placeholder="Password"
                          type="password"
                          autoComplete="new-password"
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
                    <Button
                      classname="adminloginbtn"
                      type="submit"
                      value="Submit"
                      color="primary"
                    >
                      Login
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

export default AdminLogin;
