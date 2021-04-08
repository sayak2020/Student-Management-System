/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Userprofile.css";

// reactstrap components
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

class Userprofile extends Component {
  // state = {
  //   this: [],
  //  };
  componentDidMount() {
    axios.get("http://localhost:9000/student_profile").then((response) => {
      //this.setState({ this: response.data });
      console.log(response.data);
    });
  }
  render() {
    return (
      <>
        <div>
          <Col className="order-xl-2 mb-5 mb-xl-0 userprofile" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3"></Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="float-right"
                    color="default"
                    href="/updateprofile"
                    size="sm"
                  >
                    Edit profile
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <div className="text-center">
                  <h3>{this.name}</h3>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    {this.phone}
                  </div>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {this.street}, {this.city}
                  </div>

                  <div>
                    <i className="ni education_hat mr-2" />
                    {this.stream},{this.year}
                  </div>
                  <hr className="my-4" />
                  <p>{this.pin}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </div>
      </>
    );
  }
}

export default Userprofile;
