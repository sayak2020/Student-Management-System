import React, { Component } from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import axios from "axios";

class UserHeader extends Component {
  componentDidMount() {
    axios.get("http://localhost:9000/student_profile").then((response) => {
      //this.setState({ this: response.data });
      console.log(response.data);
    });
  }
  render() {
    return (
      <>
        <div
          className="header-user pb-8-user pt-5-user pt-lg-8-user d-flex align-items-center-user"
          style={{
            minHeight: "600px",

            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Mask */}
          <span className="mask-user bg-gradient-default opacity-8" />
          {/* Header container */}
          <Container className="d-flex-user align-items-center-user" fluid>
            <Row>
              <Col lg="7" md="10">
                <h1 className="display-2-user text-white">Hello {this.name}</h1>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default UserHeader;
