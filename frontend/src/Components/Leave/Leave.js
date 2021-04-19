import React, { Component } from "react";
import axios from "axios";
import "./Leave.css";
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

class Leave extends Component {
  state = {
    from: "",
    to: "",
    cause: "",
    message: "",
  };
  postDataHandler = () => {
    const post = {
      from: this.state.from,
      to: this.state.to,
      cause: this.state.cause,
    };

    this.setState({ message: "Application for leave given" });

    const cookies = new Cookies();

    axios.post(
      `http://localhost:9000/leave/${cookies.get("userid")}/${cookies.get(
        "username"
      )}`,
      post
    );
  };
  render() {
    return (
      <div>
        <Card className="card-profile shadow attendance">
          <Row className="justify-content-center">
            <Col className="order-lg-2" lg="3"></Col>
          </Row>
          <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
            <div className="d-flex justify-content-between font-leave">
              <h6>Leave Application</h6>
            </div>
          </CardHeader>
          <CardBody className="pt-0 pt-md-4">
            <div className="text-center">
              {this.state.message && (
                <p className="message"> {this.state.message} </p>
              )}
              <FormGroup>
                <p>From</p>
                <Input
                  className="form-control-alternative"
                  id="input-date"
                  type="date"
                  value={this.state.from}
                  onChange={(event) =>
                    this.setState({ from: event.target.value })
                  }
                />
              </FormGroup>
            </div>
            <div className="text-center">
              <FormGroup>
                <p>To</p>
                <Input
                  className="form-control-alternative"
                  id="input-date"
                  type="date"
                  value={this.state.to}
                  onChange={(event) =>
                    this.setState({ to: event.target.value })
                  }
                />
              </FormGroup>
            </div>
            <div className="text-center">
              <FormGroup>
                <p>Cause</p>
                <Input
                  className="form-control-alternative"
                  id="input-cause"
                  type="text"
                  value={this.state.cause}
                  onChange={(event) =>
                    this.setState({ cause: event.target.value })
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
              Apply
            </Button>
            <div>
              <Button
                className="float-center"
                color="default"
                size="sm"
                href="/leavehistory"
              >
                Leave History
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Leave;
