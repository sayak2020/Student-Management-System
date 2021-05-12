import React, { Component } from "react";
import axios from "axios";
import styles from "./Attendance.css";
import Navigation from "../Navigation";
import Cookies from "universal-cookie";

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

class Attendance extends Component {
  state = {
    subject: "",
    message: "",
  };
  postDataHandler = () => {
    const post = {
      subject: this.state.subject,
    };

    this.setState({ message: "Attendance given" });

    const cookies = new Cookies();

    axios.post(
      `http://localhost:9000/attendence/${cookies.get("userid")}/${cookies.get(
        "username"
      )}`,
      post
    );
  };

  render() {
    return (
      <div>
        <Navigation />
        <form onSubmit={this.postDataHandler}>
          <Card className="card-profile shadow attendance">
            <Row className="justify-content-center">
              <Col className="order-lg-2" lg="3"></Col>
            </Row>
            <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div className="d-flex justify-content-between font-attend">
                <h6>Give Attendance</h6>
              </div>
            </CardHeader>
            <CardBody className="pt-0 pt-md-4">
              <div className="text-center">
                {this.state.message && (
                  <p className="message"> {this.state.message} </p>
                )}
                <FormGroup>
                  <Input
                    className="form-control-alternative"
                    id="input-subject"
                    type="text"
                    value={this.state.subject}
                    onChange={(event) =>
                      this.setState({ subject: event.target.value })
                    }
                    required
                  />
                </FormGroup>
                <Button type="submit" value="Submit" color="primary">
                  Submit
                </Button>
              </div>

              {/* <Button
              className="float-center"
              color="default"
              size="sm"
              onClick={this.postDataHandler}
            >
              Submit
            </Button> */}

              <div className="attendance-link">
                <Button
                  className="float-center"
                  color="default"
                  size="sm"
                  href="/checkattendance"
                >
                  Check Your Attendance
                </Button>
              </div>
            </CardBody>
          </Card>
        </form>
      </div>
    );
  }
}

export default Attendance;
