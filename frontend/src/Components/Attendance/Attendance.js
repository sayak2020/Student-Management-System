import React, { Component } from "react";
import axios from "axios";
import styles from "./Attendance.css";

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
  };
  postDataHandler = () => {
    const post = {
      subject: this.state.subject,
    };

    axios.post("http://localhost:9000/attendence", post);
  };

  render() {
    return (
      <div>
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
              <FormGroup>
                <Input
                  className="form-control-alternative"
                  id="input-subject"
                  type="text"
                  value={this.state.subject}
                  onChange={(event) =>
                    this.setState({ subject: event.target.value })
                  }
                />
              </FormGroup>
            </div>
            <Button
              className="float-center"
              color="default"
              size="sm"
              onClick={this.postDataHandler}
            >
              Submit
            </Button>
            <div className="attendance-link">
              <Button
                className="float-center"
                color="default"
                size="sm"
                href="/checkAttendance"
              >
                Check Your Attendance
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Attendance;
